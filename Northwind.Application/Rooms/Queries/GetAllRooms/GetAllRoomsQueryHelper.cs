using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Northwind.Persistence;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Northwind.Application.Rooms.Queries.GetAllRooms
{
    public class GetAllRoomsQueryHelper : IRequestHandler<GetAllRoomsQuery, RoomsListViewModel>
    {
        private readonly NorthwindDbContext _context;
        private readonly IMapper _mapper;

        public GetAllRoomsQueryHelper(NorthwindDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<RoomsListViewModel> Handle(GetAllRoomsQuery request, CancellationToken cancellationToken)
        {
            var rooms = await _context.Rooms.OrderBy(p => p.Id).ToListAsync(cancellationToken);

            var model = new RoomsListViewModel
            {
                Rooms = _mapper.Map<IEnumerable<RoomDto>>(rooms),
                CreateEnabled = true
            };

            return model;
        }
    }
}
