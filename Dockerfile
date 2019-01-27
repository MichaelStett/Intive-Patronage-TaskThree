FROM microsoft/dotnet:2.2-aspnetcore-runtime AS Base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM microsoft/dotnet:2.2-sdk AS build

# Restore dotnet before build to allow for caching
WORKDIR /
COPY Northwind.Application/ /src/Northwind.Application/
COPY Northwind.Common/ /src/Northwind.Common/
COPY Northwind.Domain/ /src/Northwind.Domain/
COPY Northwind.Infrastructure/ /src/Northwind.Infrastructure/
COPY Northwind.Persistence/ /src/Northwind.Persistence/
COPY Northwind.WebUI/ /src/Northwind.WebUI/

RUN dotnet restore /src/Northwind.WebUI/Northwind.WebUI.csproj
RUN dotnet build /src/Northwind.WebUI/Northwind.WebUI.csproj --no-restore -c Release
RUN dotnet publish /src/Northwind.WebUI/Northwind.WebUI.csproj --no-restore -c Release -o /app

# Copy compiled app to runtime container
FROM base AS final
COPY --from=build /app .
CMD ["dotnet", "Northwind.WebUI.dll"]