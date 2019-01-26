using Northwind.Domain.Entities;

namespace Northwind.Application.Rooms.Queries.GetAllRooms
{
    public class RoomDto
    {
        public int RoomID { get; set; }
        public int RoomNumber { get; set; }
        public string RenterName { get; set; }
        public Calendar Calendar { get; set; }
    }
}
