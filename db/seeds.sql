-- add burgers to burger table
INSERT INTO 
	burgers (burger_name, devoured)
VALUES 
	("Luger Burger", false),
    ("Le Pigeon Burger", false),
    ("Double Animal Style", true),
    ("Whiskey King Burger", true),
    ("The Company Burger", false),
    ("Dyer's Deep Fried Burger", false),
    ("Au Chevel Cheeseburger", false),
    ("Flip Burger", true),
    ("Umami Burger", true),
    ("Buckhorn Burger", false),
    ("White Manna Cheeseburger", true),
    ("Kobe Burger", false),
    ("Black Label Burger", true),
    ("Steamed Cheeseburger", true),
    ("Primetime Burger", false),
    ("Kuma Burger", true),
    ("Sirloin Burger", false),
    ("The Doh! Nut Burger", false),
    ("Peanut Buter Bacon Burger", true),
    ("Hodad's Bacon Cheeseburger", true),
    ("Zuni's Cafe Hamburger", false);
   

    
-- displays all burgers  
SELECT * FROM burgers;
