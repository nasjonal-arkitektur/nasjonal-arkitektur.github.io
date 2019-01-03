using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using System.IO;

namespace DesktopApp1
{
    class Log
    {

        string logfilePath = @"C:\Users\eha\OneDrive\GitHub\Difi\nasjonal_arkitektur\log\logfile.txt";
        DateTime timestamp = DateTime.Now;

        public void doLog(string txtToLog)
        {
            File.AppendAllText(logfilePath, System.Environment.NewLine + timestamp.ToString() + ": " + txtToLog);
        }
    }
}
