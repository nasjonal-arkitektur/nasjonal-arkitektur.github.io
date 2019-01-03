using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using System.IO;

namespace DesktopApp1
{
    class NasjonalArkitektur
    {
        static string commonDirName = "felles";

        static string rootDir = @"C:\Users\eha\OneDrive\GitHub\Difi\nasjonal_arkitektur";
        static string srcDir = rootDir + @"\" + commonDirName;

        static bool test = false;

        EriksFileUtils utils = null;
        Log log = null;

        public NasjonalArkitektur()
        {
            test = true;

            commonDirName = "felles";
            rootDir = @"C:\Users\eha\OneDrive\GitHub\Difi\nasjonal_arkitektur";
            srcDir = rootDir + @"\" + commonDirName;

            if (test)
                rootDir = "C:\\Users\\eha\\OneDrive\\GitHub\\Difi\\nasjonal_arkitektur\\test1";

            utils = new EriksFileUtils();
            log = new Log();
        }

        public void OppdaterFellesFiler()
        {
            /* 
                Copy entire srcDir ("felles") to all subdirectories under rootDir, 
                except som special subdirectories (.git, images, ...) . 
                Any existing files of the same name ("felles") should be deleted first, 
                so that only the updated files from srcDir remains.

                Note: "Felles" means "common". Not using the name "common", due to some problem...
            */

            //List<string> fileList = utils.getFilesRecursive(srcDir);

            //string rootDir = "C:\\Users\\eha\\OneDrive\\GitHub\\Difi\\nasjonal_arkitektur";

            if (test)
                rootDir = "C:\\Users\\eha\\OneDrive\\GitHub\\Difi\\nasjonal_arkitektur\\test1";


            List<string> targetDirList = utils.getDirsRecursive(rootDir);
            //List<string> sublist = targetDirList.FindAll(searchPredicateForExclusionOfTargetDirs);
            targetDirList.RemoveAll(searchPredicateForExclusionOfTargetDirs); // filter list

            foreach (String dir in targetDirList)
            {
                String targetDir = dir + "\\felles";
                utils.CopyDirRecursive(srcDir, targetDir);
            }


            //string targetDir = "C:\\Users\\eha\\OneDrive\\GitHub\\Difi\\nasjonal_arkitektur\\test1\\felles";
            //utils.CopyDirRecursive(srcDir, targetDir);

        }

        private static bool searchPredicateForExclusionOfTargetDirs(String s)
        {
            bool result = false;
            if (s.Contains("\\.git"))
                result = true;
            else if (s.Contains("\\felles"))
                result = true;
            else if (s.Contains("\\images"))
                result = true;
            else if (s.Contains("\\files"))
                result = true;

            return result;
        }

        private static bool searchPredicateForExclusionOfDirsToConsiderForSearchAndReplace(String s)
        {
            bool result = false;
            if (s.Contains("\\.git"))
                result = true;
            //else if (s.Contains("\\felles"))
            //    result = true;
            else if (s.Contains("\\images"))
                result = true;
            else if (s.Contains("\\files"))
                result = true;

            return result;
        }

        public int ErstattTekstIAlleFiler(string textToFind, string replacementText)
        {
            int numReplaced = 0;

            log.doLog("ErstattTekstIAlleFiler(" + textToFind + ", " + replacementText + ")");
            //utils.ReplaceTextInFiles(rootDir, textToFind, replacementText, true);

            List<string> dirList = utils.getDirsRecursive(rootDir, true);
            dirList.RemoveAll(searchPredicateForExclusionOfDirsToConsiderForSearchAndReplace); // filter list

            foreach (String dir in dirList)
            {
                numReplaced += utils.ReplaceTextInFiles(dir, textToFind, replacementText, false);
            }

            return numReplaced;
        }
    }
}
