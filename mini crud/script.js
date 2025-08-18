// 1
// fetch("http://localhost:3000/students")
//   .then(res => res.json())
//   .then(data => console.log("Всі студенти:", data));


//   2
// fetch("http://localhost:3000/students/1")
//   .then(res => res.json())
//   .then(data => console.log("Студент з id=1:", data));


//   3
// fetch("http://localhost:3000/students", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//       name: "Alice Brown",
//       age: 22,
//       email: "alice.brown@example.com",
//       phone: "555-9999"
//     })
//   })
//   .then(res => res.json())
//   .then(data => console.log("Додано:", data));
  
// 4
// fetch("http://localhost:3000/students/1", {
//     method: "PUT",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//       id: 1,
//       name: "John Updated",
//       age: 25,
//       email: "john.updated@example.com",
//       phone: "555-0000"
//     })
//   })
//   .then(res => res.json())
//   .then(data => console.log("Оновлено (повністю):", data));
  

// 5
// fetch("http://localhost:3000/students/2", {
//     method: "PATCH",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//       email: "new.email@example.com"
//     })
//   })
//   .then(res => res.json())
//   .then(data => console.log("Оновлено (частково):", data));
  