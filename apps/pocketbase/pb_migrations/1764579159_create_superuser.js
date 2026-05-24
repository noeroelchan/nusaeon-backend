migrate((app) => {
  const superusers = app.findCollectionByNameOrId("_superusers")
  const record = new Record(superusers)

  record.set("email", "nhiday1805@gmail.com")
  record.set("password", "nurulaya18")

  app.save(record)
})