using System;
using System.Collections.Generic;
using System.Linq;
using Northwind.Domain.Entities;
using Northwind.Persistence.Infrastructure;

namespace Northwind.Persistence
{
    public class NorthwindInitializer
    {
        private readonly Dictionary<int, Room> Rooms = new Dictionary<int, Room>(); //
        private readonly Dictionary<int, Calendar> Calendar = new Dictionary<int, Calendar>(); //

        public static void Initialize(NorthwindDbContext context)
        {
            var initializer = new NorthwindInitializer();
            initializer.SeedEverything(/* context*/);
        }

        public void SeedEverything()
        {

        }

        private static byte[] StringToByteArray(string hex)
        {
            return Enumerable.Range(0, hex.Length)
                .Where(x => x % 2 == 0)
                .Select(x => Convert.ToByte(hex.Substring(x, 2), 16))
                .ToArray();
        }
    }
}