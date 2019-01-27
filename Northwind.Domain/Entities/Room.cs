using System.Collections.Generic;
using System.Collections.ObjectModel;

namespace Northwind.Domain.Entities
{
    public class Room
    {
        public Room()
        {
            Calendar = new Collection<Calendar>();
        }

        public int Id { get; set; }
        public int Number { get; set; }
        
        public ICollection<Calendar> Calendar { get; private set; }
    }
}
