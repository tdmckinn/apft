using System;
using Microsoft.AspNet.Mvc;
using System.IO;
using CsvHelper;
using System.Web.Hosting;
using Microsoft.AspNet.Hosting;
using ArmyApftTs.Models;
using System.Linq;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace ArmyApftTs.Controllers
{
  [Route("api/[controller]")]
    public class Apft : Controller
    {

        private IHostingEnvironment env = null;
        private string situpsCsv = "";
        private string pushupsCsv = "";
        private string twomilerunCsv = "";

        public Apft(IHostingEnvironment environment)
        {
            env = environment;

            /** Store these csv strings on constructor maybe move to db **/
            situpsCsv = System.IO.File.ReadAllText(env.MapPath(@"data/male-situp-standards.csv"));
            pushupsCsv = System.IO.File.ReadAllText(env.MapPath(@"data/male-pushups-standards.csv"));
            twomilerunCsv = System.IO.File.ReadAllText(env.MapPath(@"data/male-2milerun-standards.csv"));
        }

        // GET: api/apft
        // Get All Apft standards
        [HttpGet]
        public JsonResult Get()
        { 
            return Json( new {
                success = true,
                situpsCsv,
                pushupsCsv,
                twomilerunCsv
            });
        }

        // POST api/apft/calculate
        [HttpPost]
        [Route("calculate")]
        public JsonResult CalculateApftScore([FromBody] FitnessTest test)
        {
            string[] pushupsCsvLines = pushupsCsv.Split(new string[] { Environment.NewLine }, StringSplitOptions.None);
            string[] situpsCsvLines = situpsCsv.Split(new string[] { Environment.NewLine }, StringSplitOptions.None);
            string[] runCsvLines = twomilerunCsv.Split(new string[] { Environment.NewLine }, StringSplitOptions.None);

            string ages = pushupsCsvLines[1]; 
            string[] ageRowData = ages.Split(',');
            int ageIndex = 0;
            int scoreTotal = 0;

            for(int i = 0;  i < ageRowData.Length; i++)
            {
                if (ageRowData[i] != String.Empty)
                {
                    string[] temp = ageRowData[i].Split('-');
                    var min =Convert.ToInt32(temp[0]);
                    var max = Convert.ToInt32(temp[1]);

                    var age = 24; // test.age
                    if(age >= min && age <= max)
                    {
                        ageIndex = i;
                        break;
                    }
                }
            }


            for (int i = 0; i < pushupsCsvLines.Length; i++)
            {
                if (i != 0 && i != 1)
                {
                    string[] temp = pushupsCsvLines[i].Split(',');
                    var tempPushups = Convert.ToInt32(temp[0]);
                    var pushups = 64; // test.pushups 

                    if(tempPushups == pushups)
                    {
                        scoreTotal += Convert.ToInt32(temp[ageIndex]); 
                        break;
                    }
                }
            }

            for (int i = 0; i < situpsCsvLines.Length; i++)
            {
                if (i != 0 && i != 1)
                {
                    string[] temp = situpsCsvLines[i].Split(',');
                    var tempSitups = Convert.ToInt32(temp[0]);
                    var situps = 77; // test.pushups 

                    if (tempSitups == situps)
                    {
                        scoreTotal += Convert.ToInt32(temp[ageIndex]); 
                        break;
                    }
                }
            }

            var lastRunTime = 0;
            string[] lastRunSplit = "".Split();

            for (int i = runCsvLines.Length -1; i >=0; i--)
            {
                if (i != 0 && !string.IsNullOrEmpty(runCsvLines[i]))
                {
                    string[] temp = runCsvLines[i].Split(',');
                    var tempRun = temp[0].Replace(":", "");
                    var run = 1302; // test.pushups 

                    if (!string.IsNullOrEmpty(tempRun))
                    {
                        var tempRunTime = Convert.ToInt32(tempRun); 

                        if (tempRunTime == run)
                        {
                            scoreTotal += Convert.ToInt32(temp[ageIndex]);
                            break;
                        }

                        lastRunTime = tempRunTime;
                        lastRunSplit = temp;
                    }
                    else if (lastRunTime != 0 && lastRunTime < run)
                    {
                        scoreTotal += Convert.ToInt32(lastRunSplit[ageIndex]);
                        break;
                    }
                }
            }

            return Json(new
            {
                success = true,
                scoreTotal
            });
        }

    }
}
