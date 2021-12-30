using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace AppData.Controllers
{
    [EnableCors(origins:"*", headers:"*", methods:"*")]
    public class EventController : ApiController
    {

        public JToken Get(string id = null)
        {
            var path = System.Web.Hosting.HostingEnvironment.MapPath("/");
            return JObject.Parse(File.ReadAllText(path + "../app/data/event/" + id + ".json"));
        }
        
    }
}
