using System;

namespace Northwind.Domain.Entities
{
    public class Calendar
    {
        public int Id { get; set; }
        public DateTime BookedTime { get; set; }
        public DateTime SinceTime { get; set; }
        public DateTime UntilTime { get; set; }
        public string RenterName { get; set; }
    }
}
