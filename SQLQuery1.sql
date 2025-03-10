

--1first task--


USE CompanyDB;  -- Ensure you're using the correct database
GO
DROP PROCEDURE IF EXISTS GetCustomersByCountry;  -- Drop the existing procedure
GO
CREATE PROCEDURE GetCustomersByCountry
    @CountryName NVARCHAR(50)  -- Define the input parameter for country name
AS
BEGIN
    SELECT *
    FROM Customers  -- Replace 'Customers' with the actual table name if different
    WHERE Country = @CountryName;  -- Use the input parameter here
END;
GO
EXEC GetCustomersByCountry @CountryName = 'Germany';  -- Replace 'Germany' with any country name



