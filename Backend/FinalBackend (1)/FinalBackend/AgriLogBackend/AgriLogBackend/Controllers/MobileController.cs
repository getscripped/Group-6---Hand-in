using AgriLogBackend.Models;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.Data;
using System.Dynamic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using System.Web.Http;

namespace CelineAgriLog.Controllers
{
    public class MobileController : ApiController
    {
        AgriLogDBEntities db = new AgriLogDBEntities();
        //====================================Get all tasks mobile============================================
        [HttpGet]
        [Route("api/getTasksOfStaff/{staffID}")]
        public IHttpActionResult getTasksOfStaff(string staffID)
        {
            var weekDay = DateTime.Today.DayOfWeek.ToString();
            DateTime targetDt = DateTime.Now.Date;
            List<dynamic> scheduleList = new List<dynamic>();

            try
            {


                foreach (Task_Task_Schedule task in db.Task_Task_Schedule)
                {
                    if (task.Staff_ID == staffID)
                    {


                        if (task.Schedule_End_Date != null)
                        {
                            if (task.Schedule_Start_Date.Date <= DateTime.Today.Date && task.Schedule_End_Date.Value.Date >= DateTime.Today.Date && task.Day_Of_Week.Day_Description == weekDay && task.Staff_ID == staffID)
                            {
                                dynamic myObj = new ExpandoObject();
                                myObj.Task_ID = task.Task_ID;
                                myObj.Task_Description = task.Task.Task_Description;
                                myObj.Status_ID = task.Status_ID;
                                myObj.Status_Description = task.Status.Status_Description;
                                myObj.Staff_ID = task.Staff_ID;
                                myObj.Start_Date = task.Schedule_Start_Date;
                                myObj.End_Date = task.Schedule_End_Date;
                                myObj.Task_Schhedule_ID = task.Schedule_ID;
                                scheduleList.Add(myObj);

                            }

                        }
                        else if (task.Schedule_Start_Date.Date == DateTime.Today.Date)
                        {
                            dynamic myObj2 = new ExpandoObject();
                            myObj2.Task_ID = task.Task_ID;
                            myObj2.Task_Description = task.Task.Task_Description;
                            myObj2.Status_ID = task.Status_ID;
                            myObj2.Status_Description = task.Status.Status_Description;
                            myObj2.Staff_ID = task.Staff_ID;
                            myObj2.Start_Date = task.Schedule_Start_Date;
                            //myObj2.End_Date = task.Schedule_End_Date;
                            myObj2.Task_Schhedule_ID = task.Schedule_ID;
                            scheduleList.Add(myObj2);

                        }

                    }

                }
                return Content(HttpStatusCode.OK, scheduleList);
            }
            catch (Exception e)
            {
                return Content(HttpStatusCode.BadRequest, e);
            }

        }

        [HttpPut]
        [Route("api/Mobile/UpdateTaskStatus/{id}")]
        public IHttpActionResult UpdateTaskStatus(int id)
        {
            try
            {
                foreach (Task_Task_Schedule task in db.Task_Task_Schedule)
                {
                    if (task.Schedule_ID == id)
                    {
                        task.Status_ID = 1;

                    }
                }
                db.SaveChanges();
                return Content(HttpStatusCode.OK, "row affected");
            }
            catch (Exception e)
            {
                return Content(HttpStatusCode.BadRequest, e);
            }
        }

        [HttpGet]
        [Route("api/Mobile/taskDetails/{id}")]
        public IHttpActionResult taskDetails(int id)
        {


            try
            {
                var tasks = from task in db.Tasks
                            where task.Task_ID == id

                            select new
                            {
                                Task_ID = task.Task_ID,
                                Section_ID = task.Section_ID,
                                Section_Name = task.Section.Section_Name,
                                Infrastructure_ID = task.Infrastructure_ID,
                                Infrastructure_Name = task.Infrastructure.Infrastructure_Name,
                                Equipment_ID = task.Equipment_ID,
                                Equipment_Description = task.Equipment.Equipment_Description,
                                Task_Type_ID = task.Task_Type_ID,
                                Task_Type_Description = task.Task_Type.Task_Type_Description,
                                Importance_ID = task.Importance_ID,
                                Importance_Description = task.Importance.Importance_Description,
                                Task_Duration = task.Task_Duration,
                                Task_Description = task.Task_Description
                            };

                var returnOBJ = tasks.ToList<dynamic>().FirstOrDefault(); // << find equipment
                return Content(HttpStatusCode.OK, returnOBJ);
            }
            catch (Exception e)
            {

                return Content(HttpStatusCode.BadRequest, "Null entry error:"); // Return empty request error
            }


        }


        //====================================Get all faults mobile============================================
        [HttpGet]
        [Route("api/getFaultsOfStaff/{staffID}")]
        public IHttpActionResult getFaultsOfStaff(string staffID)
        {
            var weekDay = DateTime.Today.DayOfWeek.ToString();
            DateTime targetDt = DateTime.Now.Date;
            List<dynamic> faultList = new List<dynamic>();

            try
            {


                foreach (Fault_Staff fault in db.Fault_Staff)
                {
                    if (fault.Staff_ID == staffID)
                    {


                        if (fault.Fault_Log.Fault_End_Date != null)
                        {
                            if (fault.Fault_Log.Fault_Start_Date.Date <= DateTime.Today.Date && fault.Fault_Log.Fault_End_Date.Value.Date >= DateTime.Today.Date && fault.Staff_ID == staffID)
                            {
                                dynamic myObj = new ExpandoObject();
                                myObj.Fault_ID = fault.Fault_ID;
                                myObj.Fault_Description = fault.Fault_Log.Fault_Description;
                                myObj.Status_ID = fault.Fault_Log.Status_ID;
                                myObj.Status_Description = fault.Fault_Log.Status.Status_Description;
                                myObj.Staff_ID = fault.Staff_ID;
                                myObj.Start_Date = fault.Fault_Log.Fault_Start_Date;
                                myObj.End_Date = fault.Fault_Log.Fault_End_Date;
                                myObj.FaultStaff_Id = fault.FaultStaff_Id;
                                faultList.Add(myObj);

                            }

                        }
                        else if (fault.Fault_Log.Fault_Start_Date.Date == DateTime.Today.Date)
                        {
                            dynamic myObj2 = new ExpandoObject();
                            myObj2.Fault_ID = fault.Fault_ID;
                            myObj2.Fault_Description = fault.Fault_Log.Fault_Description;
                            myObj2.Status_ID = fault.Fault_Log.Status_ID;
                            myObj2.Status_Description = fault.Fault_Log.Status.Status_Description;
                            myObj2.Staff_ID = fault.Staff_ID;
                            myObj2.Start_Date = fault.Fault_Log.Fault_Start_Date;
                            //myObj2.End_Date = fault.Fault_Log.Fault_End_Date;
                            myObj2.FaultStaff_Id = fault.FaultStaff_Id;
                            faultList.Add(myObj2);

                        }

                    }

                }
                return Content(HttpStatusCode.OK, faultList);
            }
            catch (Exception e)
            {
                return Content(HttpStatusCode.BadRequest, e);
            }
        }


        [HttpGet]
        [Route("api/Mobile/faultDetails/{id}")]
        public IHttpActionResult faultDetails(int id)
        {


            try
            {
                var queryFault = from fault in db.Fault_Log
                                 where fault.Fault_ID == id

                                 select new
                                 {
                                     Fault_ID = fault.Fault_ID,
                                     Section_ID = fault.Section_ID,
                                     Section_Name = fault.Section.Section_Name,
                                     Infrastructure_ID = fault.Infrastructure_ID,
                                     Infrastructure_Name = fault.Infrastructure.Infrastructure_Name,
                                     Equipment_ID = fault.Equipment_ID,
                                     Equipment_Description = fault.Equipment.Equipment_Description,
                                     FT_ID = fault.FT_ID,
                                     FT_Description = fault.Fault_Type.FT_Description,
                                     Importance_ID = fault.Importance_ID,
                                     Importance_Description = fault.Importance.Importance_Description,
                                     Fault_Start_Date = fault.Fault_Start_Date,
                                     Fault_End_Date = fault.Fault_End_Date,
                                     Fault_Description = fault.Fault_Description,
                                     Status_ID = fault.Status_ID,
                                     Status_Description = fault.Status.Status_Description
                                 };
                var returnOBJ = queryFault.ToList<dynamic>().FirstOrDefault(); // << find equipment
                return Content(HttpStatusCode.OK, returnOBJ);
            }
            catch (Exception)
            {

                return Content(HttpStatusCode.BadRequest, "Null entry error:"); // Return empty request error
            }


        }

        [HttpPut]
        [Route("api/Mobile/UpdateFaultStatus/{id}")]
        public IHttpActionResult UpdateFaultStatus(int id)
        {
            try
            {
                foreach (Fault_Staff fault in db.Fault_Staff)
                {
                    if (fault.FaultStaff_Id == id)
                    {
                        fault.Fault_Log.Status_ID = 1;

                    }
                }
                db.SaveChanges();
                return Content(HttpStatusCode.OK, "row affected");
            }
            catch (Exception e)
            {
                return Content(HttpStatusCode.BadRequest, e);
            }
        }
        //====================================Get all maintenance mobile============================================
        [HttpGet]
        [Route("api/getMaintOfStaff/{staffID}")]
        public IHttpActionResult getMaintOfStaff(string staffID)
        {
            var weekDay = DateTime.Today.DayOfWeek.ToString();
            DateTime targetDt = DateTime.Now.Date;
            List<dynamic> maintList = new List<dynamic>();

            try
            {


                foreach (Maintenance_Staff maintenance in db.Maintenance_Staff)
                {
                    if (maintenance.Staff_ID == staffID)
                    {


                        if (maintenance.Maintenance_Log.Maintenance_End_Date != null)
                        {
                            if (maintenance.Maintenance_Log.Maintenance_Start_Date.Date <= DateTime.Today.Date
                                && maintenance.Maintenance_Log.Maintenance_End_Date.Value.Date >= DateTime.Today.Date
                                && maintenance.Staff_ID == staffID)
                            {
                                dynamic myObj = new ExpandoObject();
                                myObj.Maintenance_ID = maintenance.Maintenance_ID;
                                myObj.Maintenance_Description = maintenance.Maintenance_Log.Maintenance_Description;
                                myObj.Status_ID = maintenance.Maintenance_Log.Status_ID;
                                myObj.Status_Description = maintenance.Maintenance_Log.Status.Status_Description;
                                myObj.Staff_ID = maintenance.Staff_ID;
                                myObj.Start_Date = maintenance.Maintenance_Log.Maintenance_Start_Date;
                                myObj.End_Date = maintenance.Maintenance_Log.Maintenance_End_Date;
                                myObj.Mainstaff_Id = maintenance.Mainstaff_Id;
                                maintList.Add(myObj);

                            }

                        }
                        else if (maintenance.Maintenance_Log.Maintenance_Start_Date.Date == DateTime.Today.Date)
                        {
                            dynamic myObj2 = new ExpandoObject();
                            myObj2.Maintenance_ID = maintenance.Maintenance_ID;
                            myObj2.Maintenance_Description = maintenance.Maintenance_Log.Maintenance_Description;
                            myObj2.Status_ID = maintenance.Maintenance_Log.Status_ID;
                            myObj2.Status_Description = maintenance.Maintenance_Log.Status.Status_Description;
                            myObj2.Staff_ID = maintenance.Staff_ID;
                            myObj2.Start_Date = maintenance.Maintenance_Log.Maintenance_Start_Date;
                            //myObj.End_Date = maintenance.Maintenance_Log.Maintenance_End_Date;
                            myObj2.Mainstaff_Id = maintenance.Mainstaff_Id;
                            maintList.Add(myObj2);

                        }

                    }

                }
                return Content(HttpStatusCode.OK, maintList);
            }
            catch (Exception e)
            {
                return Content(HttpStatusCode.BadRequest, e);
            }
        }

        [HttpGet]
        [Route("api/Mobile/maintenanceDetails/{id}")]
        public IHttpActionResult maintenanceDetails(int id)
        {


            try
            {
                var queryMaintenance = from maintenance in db.Maintenance_Log
                                       where maintenance.Maintenance_ID == id

                                       select new
                                       {
                                           Maintenance_ID = maintenance.Maintenance_ID,
                                           Section_ID = maintenance.Section_ID,
                                           Section_Name = maintenance.Section.Section_Name,
                                           Infrastructure_ID = maintenance.Infrastructure_ID,
                                           Infrastructure_Name = maintenance.Infrastructure.Infrastructure_Name,
                                           Equipment_ID = maintenance.Equipment_ID,
                                           Equipment_Description = maintenance.Equipment.Equipment_Description,
                                           MT_ID = maintenance.MT_ID,
                                           MT_Description = maintenance.Maintenance_Type.MT_Description,
                                           Importance_ID = maintenance.Importance_ID,
                                           Importance_Description = maintenance.Importance.Importance_Description,
                                           Maintenance_Start_Date = maintenance.Maintenance_Start_Date,
                                           Maintenance_End_Date = maintenance.Maintenance_End_Date,
                                           Maintenance_Description = maintenance.Maintenance_Description,
                                           Status_ID = maintenance.Status_ID,
                                           Status_Description = maintenance.Status.Status_Description
                                       };
                var returnOBJ = queryMaintenance.ToList<dynamic>().FirstOrDefault(); // << find equipment\
                return Content(HttpStatusCode.OK, returnOBJ);
            }
            catch (Exception)
            {

                return Content(HttpStatusCode.BadRequest, "Null entry error:"); // Return empty request error
            }


        }

        [HttpPut]
        [Route("api/Mobile/UpdateMaintStatus/{id}")]
        public IHttpActionResult UpdateMaintStatus(int id)
        {
            try
            {
                foreach (Maintenance_Staff maint in db.Maintenance_Staff)
                {
                    if (maint.Mainstaff_Id == id)
                    {
                        maint.Maintenance_Log.Status_ID = 1;

                    }
                }
                db.SaveChanges();
                return Content(HttpStatusCode.OK, "row affected");
            }
            catch (Exception e)
            {
                return Content(HttpStatusCode.BadRequest, e);
            }
        }

        [HttpGet]
        [Route("api/getFarmsMobile/{userID}")]
        public IHttpActionResult getFarmsMobile(int userID)
        {
            try
            {
                var farms = from farm in db.Farms
                            join userPosition in db.Farm_User_User_Position on farm.Farm_ID equals userPosition.Farm_ID
                            join farmUser in db.Farm_User on userPosition.Farm_User_ID equals farmUser.Farm_User_ID
                            join user in db.Users on farmUser.User_ID equals user.User_ID
                            where user.User_ID == userID
                            select new
                            {
                                Farm_ID = userPosition.Farm_ID,
                                Farm_Name = farm.Farm_Name,
                                User_ID = user.User_ID
                            };
                var farmList = farms.ToList<dynamic>();
                return Content(HttpStatusCode.OK, farmList);
            }
            catch (Exception e)
            {
                return Content(HttpStatusCode.BadRequest, e);
            }

        }

        [HttpGet]
        [Route("api/Mobile/CheckedIn/{farmID}")]
        public IHttpActionResult checkedInStaff(int farmID)
        {

            List<dynamic> dynamicStaffMembers = new List<dynamic>();
            //dynamic newExpando = new ExpandoObject();

            foreach (Clocked clocked in db.Clockeds)
            {
                foreach (Staff staff in db.Staffs)
                {
                    if (staff.Farm_ID == farmID && staff.Staff_ID == clocked.Staff_ID)
                    {
                        string clock = clocked.Clocked_In_Time.ToShortDateString();
                        if (clock == DateTime.Now.Date.ToShortDateString() && clocked.Clocked_Out_Time == null)
                        {
                            dynamic dynamicStaff = new ExpandoObject();
                            dynamicStaff.Staff_ID = staff.Staff_ID;
                            dynamicStaff.Staff_Name = staff.Staff_Name;
                            dynamicStaff.Staff_Surname = staff.Staff_Surname;
                            dynamicStaff.Staff_DoB = staff.Staff_DoB;
                            dynamicStaff.Staff_Phone_Number = staff.Staff_Phone_Number;
                            dynamicStaff.Staff_Address = staff.Staff_Address;
                            dynamicStaff.Staff_Photo = staff.Staff_Photo;
                            dynamicStaff.Is_Active = staff.Is_Active;
                            dynamicStaff.Clocked_In_Time = clocked.Clocked_In_Time;
                            dynamicStaff.Clocked_Out_Time = clocked.Clocked_Out_Time;
                            dynamicStaffMembers.Add(dynamicStaff);
                            //newExpando.staff = dynamicStaffMembers;
                        }
                    }
                }
            }


            try
            {
                return Ok(dynamicStaffMembers);
                //return Ok(myObjectList);
            }
            catch (Exception)
            {
                return Content(HttpStatusCode.BadRequest, "Error");
            }

        }
    }
}
