using System;
using System.Collections.Generic;
using System.Windows.Forms;

using System.IO;

// This is the code for your desktop app.
// Press Ctrl+F5 (or go to Debug > Start Without Debugging) to run your app.

namespace DesktopApp1
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void linkLabel1_LinkClicked(object sender, LinkLabelLinkClickedEventArgs e)
        {
            // Click on the link below to continue learning how to build a desktop app using WinForms!
            System.Diagnostics.Process.Start("http://aka.ms/dotnet-get-started-desktop");

        }

        private void button1_Click(object sender, EventArgs e)
        {

            NasjonalArkitektur na = new NasjonalArkitektur();
            try
            {
                na.OppdaterFellesFiler();
                MessageBox.Show("Oppdatering ferdig");
            }
            catch (System.Exception ex)
            {
                MessageBox.Show(ex.Message + " - exiting...");
                 Application.Exit();
            }

            
        }

     
        private void button2_Click(object sender, EventArgs e)
        {
            NasjonalArkitektur na = new NasjonalArkitektur();

            string textToFind = "Hei Erik";
            string replacementText = "Erik";
            //utils.ReplaceTextInFiles(rootfolder, textToFind, replacementText);

            int count = na.ErstattTekstIAlleFiler(textToFind, replacementText);

            MessageBox.Show(count.ToString() + " erstatninger utført");



        }
    }
}
