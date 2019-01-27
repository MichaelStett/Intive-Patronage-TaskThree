FROM microsoft/dotnet:2.2-aspnetcore-runtime AS Base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM microsoft/dotnet:2.2-sdk AS build

# Restore dotnet before build to allow for caching
WORKDIR /
COPY Northwind.Application/Northwind.Application.csproj /Src/Northwind.Application/
COPY Northwind.Common/Northwind.Common.csproj /Src/Northwind.Common/
COPY Northwind.Domain/Northwind.Domain.csproj /Src/Northwind.Domain/
COPY Northwind.Infrastructure/Northwind.Infrastructure.csproj /Src/Northwind.Infrastructure/
COPY Northwind.Persistence/Northwind.Persistence.csproj /Src/Northwind.Persistence/
COPY Northwind.WebUI/Northwind.WebUI.csproj /Src/Northwind.WebUI/

RUN dotnet restore /src/Northwind.WebUI/Northwind.WebUI.csproj

RUN dotnet build /src/Northwind.WebUI/Northwind.WebUI.csproj --no-restore -c Release
RUN dotnet publish /src/Northwind.WebUI/Northwind.WebUI.csproj --no-restore -c Release -o /app

# Copy compiled app to runtime container
FROM base AS final
COPY --from=build /app .
CMD ["dotnet", "Northwind.WebUI.dll"]