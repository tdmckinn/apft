using System;
using Microsoft.AspNet.Mvc;
using System.IO;
using CsvHelper;
using System.Web.Hosting;
using Microsoft.AspNet.Hosting;

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

            /** Store these csv strings on constructor init maybe move to db **/
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

        // GET api/values/5
        [HttpGet]
        [Route("calculate")]
        public string GetApftScore(int id)
        {
            return "score";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
