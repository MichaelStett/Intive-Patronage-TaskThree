using Microsoft.EntityFrameworkCore;
using Northwind.Domain.Entities;

namespace Northwind.Persistence
{
    public class NorthwindDbContext : DbContext
    {
        public NorthwindDbContext(DbContextOptions<NorthwindDbContext> options)
             : base(options) { } 

        //public DbSet<Calendar> Calendar { get; set; }
        public DbSet<Room> Rooms { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfigurationsFromAssembly(typeof(NorthwindDbContext).Assembly);
        }
    }
}
