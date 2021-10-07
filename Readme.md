## Step 1

1. Create a DataBase named `BMS`
2. run the table script `\SQL Script\Tables.sql`

## Step 2

1. change the server details in `\DotNet\back-bms\Models\BMSContext.cs` around line `31` 
to your server 
> `optionsBuilder.UseSqlServer("Server=<ServerName>;Database=BMS;Integrated Security=True;");`
2. Run the project.

## Step 3

1. open `cmd` in `\React`
2. run command `npm start` to run the react app.


### Snapshot of Test are in SQL Script folder.
