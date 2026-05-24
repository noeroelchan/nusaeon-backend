/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("products");

  const record0 = new Record(collection);
    record0.set("name", "EcoBio Packaging Film 25\u03bcm");
    record0.set("category", "Packaging Films");
    record0.set("description", "Premium biodegradable packaging film made from cassava starch. Fully compostable within 180 days, perfect for food packaging and industrial applications. Maintains excellent barrier properties while being 100% eco-friendly.");
    record0.set("specifications", "Thickness: 25 micrometers, Material: Cassava-based biopolymer, Tensile Strength: 45 MPa, Elongation: 120%, Biodegradable: EN 13432 certified");
    record0.set("price", 2500);
    record0.set("stock", 500);
    record0.set("image_url", "https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=500&h=500&fit=crop");
  try {
    app.save(record0);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record1 = new Record(collection);
    record1.set("name", "CassavaWrap Food Pouch 500g");
    record1.set("category", "Bags & Pouches");
    record1.set("description", "Eco-friendly stand-up pouch for food packaging. Made entirely from cassava-based biopolymer with excellent moisture barrier. Ideal for snacks, grains, and dry goods. Fully compostable and home-compostable certified.");
    record1.set("specifications", "Size: 150mm x 250mm, Capacity: 500g, Material: Cassava biopolymer, Barrier: Moisture resistant, Sealing: Heat-sealable, Compostable: OK Compost Home certified");
    record1.set("price", 1800);
    record1.set("stock", 800);
    record1.set("image_url", "https://images.unsplash.com/photo-1599599810694-b5ac4dd64b73?w=500&h=500&fit=crop");
  try {
    app.save(record1);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record2 = new Record(collection);
    record2.set("name", "BioContainer 250ml Clear");
    record2.set("category", "Containers");
    record2.set("description", "Transparent biodegradable container for food service and takeaway applications. Crystal-clear visibility without compromising environmental standards. Perfect for deli, bakery, and prepared food packaging.");
    record2.set("specifications", "Volume: 250ml, Material: Cassava-based biopolymer, Clarity: 92% light transmission, Temperature Resistance: -20\u00b0C to 80\u00b0C, Stackable: Yes, Compostable: EN 13432 certified");
    record2.set("price", 3200);
    record2.set("stock", 1200);
    record2.set("image_url", "https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=500&h=500&fit=crop");
  try {
    app.save(record2);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record3 = new Record(collection);
    record3.set("name", "EcoSpoon Biodegradable Cutlery Set");
    record3.set("category", "Cutlery & Utensils");
    record3.set("description", "Complete cutlery set including spoon, fork, and knife made from cassava starch. Sturdy enough for hot and cold foods, completely compostable. Perfect for restaurants, catering, and food delivery services.");
    record3.set("specifications", "Material: Cassava biopolymer, Pieces per set: 3 (spoon, fork, knife), Length: 160mm, Weight capacity: 500g, Temperature: Suitable for -20\u00b0C to 90\u00b0C, Compostable: Home and industrial compostable");
    record3.set("price", 950);
    record3.set("stock", 2000);
    record3.set("image_url", "https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=500&h=500&fit=crop");
  try {
    app.save(record3);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record4 = new Record(collection);
    record4.set("name", "NusaBag Premium Shopping Bag");
    record4.set("category", "Bags & Pouches");
    record4.set("description", "Durable shopping bag made from reinforced cassava biopolymer. Reusable and fully compostable at end-of-life. Replaces traditional plastic bags with zero environmental guilt. Strong handles and spacious design.");
    record4.set("specifications", "Size: 350mm x 450mm, Material: Reinforced cassava biopolymer, Handle strength: 15kg load capacity, Thickness: 80 micrometers, Compostable: EN 13432 certified, Reusable cycles: 50+");
    record4.set("price", 4500);
    record4.set("stock", 600);
    record4.set("image_url", "https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=500&h=500&fit=crop");
  try {
    app.save(record4);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record5 = new Record(collection);
    record5.set("name", "FlexiFilm Laminate 40\u03bcm");
    record5.set("category", "Packaging Films");
    record5.set("description", "High-performance laminate film combining cassava biopolymer with natural fiber reinforcement. Excellent puncture resistance and flexibility. Ideal for flexible packaging and industrial wrapping applications.");
    record5.set("specifications", "Thickness: 40 micrometers, Material: Cassava biopolymer + natural fiber composite, Tensile Strength: 65 MPa, Puncture Resistance: ASTM F1383 tested, Biodegradable: EN 13432 certified");
    record5.set("price", 3800);
    record5.set("stock", 400);
    record5.set("image_url", "https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=500&h=500&fit=crop");
  try {
    app.save(record5);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record6 = new Record(collection);
    record6.set("name", "BioTray Compartment Container 1000ml");
    record6.set("category", "Containers");
    record6.set("description", "Multi-compartment food tray for meal prep and food delivery. Made from cassava-based material with excellent rigidity. Microwave-safe and fully compostable. Perfect for restaurants and meal kit services.");
    record6.set("specifications", "Volume: 1000ml, Compartments: 3 sections, Material: Cassava biopolymer, Microwave safe: Yes (up to 80\u00b0C), Stackable: Yes, Compostable: Industrial and home compostable");
    record6.set("price", 5200);
    record6.set("stock", 900);
    record6.set("image_url", "https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=500&h=500&fit=crop");
  try {
    app.save(record6);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record7 = new Record(collection);
    record7.set("name", "CassavaWrap Stretch Film Roll");
    record7.set("category", "Packaging Films");
    record7.set("description", "Industrial-grade stretch wrap made from cassava biopolymer. Excellent cling properties without adhesive. Ideal for pallet wrapping and product bundling. Fully biodegradable alternative to conventional plastic wrap.");
    record7.set("specifications", "Width: 500mm, Thickness: 20 micrometers, Material: Cassava biopolymer, Cling strength: 450 g/inch, Roll length: 1500m, Biodegradable: EN 13432 certified");
    record7.set("price", 6500);
    record7.set("stock", 300);
    record7.set("image_url", "https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=500&h=500&fit=crop");
  try {
    app.save(record7);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record8 = new Record(collection);
    record8.set("name", "EcoFork Compostable Utensil");
    record8.set("category", "Cutlery & Utensils");
    record8.set("description", "Single-use fork made from 100% cassava starch. Rigid structure maintains integrity in hot and cold foods. Ideal for food courts, catering events, and takeaway services. Completely home-compostable.");
    record8.set("specifications", "Material: Cassava starch biopolymer, Length: 160mm, Weight: 2.5g, Temperature range: -20\u00b0C to 90\u00b0C, Strength: Suitable for all food types, Compostable: Home and industrial compostable");
    record8.set("price", 650);
    record8.set("stock", 3000);
    record8.set("image_url", "https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=500&h=500&fit=crop");
  try {
    app.save(record8);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record9 = new Record(collection);
    record9.set("name", "CustomBio Solution - Thermoformed Packaging");
    record9.set("category", "Custom Solutions");
    record9.set("description", "Bespoke thermoformed packaging solutions tailored to your product specifications. Made from cassava biopolymer with custom shapes, sizes, and branding options. Perfect for premium product packaging and brand differentiation.");
    record9.set("specifications", "Material: Cassava biopolymer, Customization: Full design support, Minimum order: 5000 units, Lead time: 4-6 weeks, Branding: Printing available, Compostable: EN 13432 certified");
    record9.set("price", 12000);
    record9.set("stock", 100);
    record9.set("image_url", "https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=500&h=500&fit=crop");
  try {
    app.save(record9);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})