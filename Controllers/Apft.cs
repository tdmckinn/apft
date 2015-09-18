using System;
using Microsoft.AspNet.Mvc;
using System.IO;
using CsvHelper;
using System.Web.Hosting;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace ArmyApftTs.Controllers
{
  [Route("api/[controller]")]
    public class Apft : Controller
    {
        // GET: api/apft
        // Get All Apft standards
        [HttpGet]
        public String Get()
        {

            // TextReader reader = System.IO.File.OpenText(HostingEnvironment.MapPath(@"~/data/male-situp-standars.csv"));

            //var csv = new CsvReader(reader);


            //
            // Read entire text file with TextReader.
            //
            //using (TextReader reader = File.OpenText(@"C:\perl.txt"))
            //{
            //  string text = reader.ReadToEnd();
            //  Console.WriteLine(text.Length);
            //}
            return "";
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
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
