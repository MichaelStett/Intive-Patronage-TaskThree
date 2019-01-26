using System.Collections.Generic;

namespace Northwind.Domain.Entities
{
    public class Room
    {
        public int RoomID { get; set; }
        public int RoomNumber { get; set; }
        public string RenterName { get; set; }
        public Calendar Calendar { get; set; } /* BookedTime  SinceTime  UntilTime */
    }
}
