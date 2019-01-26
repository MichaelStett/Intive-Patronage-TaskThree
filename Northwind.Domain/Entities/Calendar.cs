using System;

namespace Northwind.Domain.Entities
{
    public class Calendar
    {
        public DateTime BookedTime { get; set; }
        public DateTime SinceTime { get; set; }
        public DateTime UntilTime { get; set; }
    }
}
