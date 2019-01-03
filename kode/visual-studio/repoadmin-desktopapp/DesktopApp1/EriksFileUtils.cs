﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using System.IO;
using System.Windows.Forms;

namespace DesktopApp1
{


    class EriksFileUtils
    {
        // See http://james-ramsden.com/c-recursively-get-all-files-in-a-folder-and-its-subfolders/

        List<string> files = new List<string>();
        List<string> dirs = new List<string>();

        Log log = new Log();

        public List<string> getSubDirectories(string sDir)
        {
            return Directory.GetDirectories(sDir).ToList();
        }

        public List<string> getDirsRecursive(string sDir, bool includeRoot = false)
        {
            try
            {
                if (includeRoot)
                    dirs.Add(sDir);

                foreach (string d in Directory.GetDirectories(sDir))
                {
                    dirs.Add(d);
                    getDirsRecursive(d);
                }
                return dirs;
            }
            catch (System.Exception e)
            {
                MessageBox.Show(e.Message);
                return null;
            }
        }


        public List<string> getFilesRecursive(string sDir)
        {
            try
            {
                foreach (string d in Directory.GetDirectories(sDir))
                {
                    //MessageBox.Show(d);
                    getFilesRecursive(d);
                }
                foreach (var file in Directory.GetFiles(sDir))
                {
                    //This is where you would manipulate each file found, e.g.:
                    DoAction(file);
                }
                return files;
            }
            catch (System.Exception e)
            {
                MessageBox.Show(e.Message);
                return null;
            }
        }

        private void DoAction(string filepath)
        {
            files.Add(filepath);
            //MessageBox.Show(filepath);
        }
   

        public void CopyDirRecursive(string sourceDirectory, string targetDirectory)
        {
            DirectoryInfo diSource = new DirectoryInfo(sourceDirectory);
            DirectoryInfo diTarget = new DirectoryInfo(targetDirectory);

            CopyDirRecursive(diSource, diTarget);
        }

        private static void CopyDirRecursive(DirectoryInfo source, DirectoryInfo target)
        {
            //if (Directory.GetDirectories(target.FullName) != null)
            try
            {
                Directory.Delete(target.FullName, true); // delete first!
            }
            catch (DirectoryNotFoundException dirEx) 
            {
               // accept and do nothing
            }

            try
            {
                Directory.CreateDirectory(target.FullName);

                // Copy each file into the new directory.
                foreach (FileInfo fi in source.GetFiles())
                {
                    //Console.WriteLine(@"Copying {0}\{1}", target.FullName, fi.Name);
                    fi.CopyTo(Path.Combine(target.FullName, fi.Name), true);
                }

                // Copy each subdirectory using recursion.
                foreach (DirectoryInfo diSourceSubDir in source.GetDirectories())
                {
                    DirectoryInfo nextTargetSubDir =
                        target.CreateSubdirectory(diSourceSubDir.Name);

                    CopyDirRecursive(diSourceSubDir, nextTargetSubDir);
                }
            }
            catch (System.Exception e)
            {
                MessageBox.Show(e.Message + " Target dir: " + target.FullName);
                
                return;
            }

        }


        public int ReplaceTextInFiles(string rootfolder, string textToFind, string replacementText, bool recursive)
        {

            int totalFindCount = 0;

            SearchOption sOption = SearchOption.TopDirectoryOnly;
            if (recursive)
                sOption = SearchOption.AllDirectories;

            string[] files = Directory.GetFiles(rootfolder, "*.*", sOption);

            foreach (string file in files)
            {
                //if (!IsStringInFile(file, textToFind))

                int findCount = CountStringInFile(file, textToFind);
                totalFindCount += findCount;

                if (findCount == 0)
                    continue;

                try
                {
                    log.doLog(findCount.ToString() + " replacements in file " + file);

                    string contents = File.ReadAllText(file);
        
                    contents = contents.Replace(@textToFind, @replacementText);
                    // Make files writable
                    File.SetAttributes(file, FileAttributes.Normal);

                    File.WriteAllText(file, contents);
                }
                catch (Exception ex)
                {
                    //Console.WriteLine(ex.Message);
                    MessageBox.Show(ex.Message);
                
                }

            } // for each

            return totalFindCount;
        }


        public bool IsStringInFile(string filepath, string stringToFind)
        {
            bool result = false;
            string line;

            System.IO.StreamReader file = new System.IO.StreamReader(filepath);

            while ((line = file.ReadLine()) != null)
            {
                if (line.Contains(stringToFind))
                {
                    result = true;
                    break;
                }
            }

            file.Close();
            return result;
        }

        public int CountStringInFile(string filepath, string stringToFind)
        {
            int result = 0;
            string line;

            System.IO.StreamReader file = new System.IO.StreamReader(filepath);

            while ((line = file.ReadLine()) != null)
            {
                if (line.Contains(stringToFind))
                    result++;
            }

            file.Close();
            return result;
        }

    }

}
