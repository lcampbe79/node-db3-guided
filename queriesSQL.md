```
--insert into geese (name) values ('Ben Aflack');
--create view Sales as
select Employee.FirstName, Employee.LastName, Employee.Title, [Order].*
from [Order]
join Employee on [Order].EmployeeId = Employee.Id;


--list of products including the Product Category Name
select c.CategoryName, p.ProductName as Product
from [Product] as p --considered left for left join
join Category as c on p.CategoryId = c.Id; --considered right

--list of customers & orders if there are any 16,789
Select *
from Customer as c
join [Order] as o on c.iD = o.CustomerId
order by c.Id;

--list of customers without orders
Select *
from Customer as c
left join [Order] as o on c.iD = o.CustomerId
order by c.Id;

--delete from [Order] where CustomerId = 'ALfki'
select * from [Order]
--delete from [Order]
where CustomerId= 'ALFKI';


/*GROUPING & AGGREGATE */
--Group first then aggregate an operation each group

--How many orders have been processed
select count(*) as [Total Orders] from [Order];

--grouping products by Category
select c.CategoryName as Category, count(*) as Products 
from [Product] as p
join Category as c on p.CategoryId = c.Id
group by c.CategoryName
order by c.CategoryName;

--what's cheapest product
select c.CategoryName as Category, min(p.UnitPrice) as Cheapest--p.UnitPrice is a column
from [Product] as p
join Category as c on p.CategoryId = c.Id
group by c.CategoryName
order by c.CategoryName;

--what's most expensive
select c.CategoryName as Category, max(p.UnitPrice) as Most_Expensive--p.UnitPrice is a column
from [Product] as p
join Category as c on p.CategoryId = c.Id
group by c.CategoryName
order by c.CategoryName;

--combined
select c.CategoryName as Category
    , count(*) as TotalProducts
    , max(p.UnitPrice) as Apple
    , min(p.UnitPrice) as Cheapest
from [Product] as p
join Category as c on p.CategoryId = c.Id
group by c.CategoryName
order by c.CategoryName;

--list customers & the name

``