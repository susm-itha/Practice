class StudentError extends Error {
            constructor(message) {
                super(message);
                this.name = "StudentError";
            }
        }


        // Get students from Local Storage
        function getStudents() {

            const data = localStorage.getItem("students");

            // JSON.parse()
            return data ? JSON.parse(data) : [];
        }


        // Add Student
        function addStudent() {

            try {

                const id = Number(document.getElementById("studentId").value);
                const name = document.getElementById("studentName").value;
                const marks = Number(document.getElementById("studentMarks").value);

                // throw
                if (!id || !name || marks < 0 || marks > 100) {
                    throw new StudentError(
                        "Please enter valid student details!"
                    );
                }

                const students = getStudents();

                const student = {
                    id: id,
                    name: name,
                    marks: marks
                };

                students.push(student);

                // JSON.stringify()
                localStorage.setItem(
                    "students",
                    JSON.stringify(students)
                );


                // Session Storage
                sessionStorage.setItem(
                    "lastStudent",
                    JSON.stringify(student)
                );

                alert("Student added successfully!");

                displayStudents();

            }
            catch (error) {

                console.log(error.name);
                alert(error.message);

            }
            finally {

                console.log("Student operation completed.");

            }
        }


        // Display Students
        function displayStudents() {

            try {

                const students = getStudents();

                let output = "";

                students.forEach(function(student) {

                    output += `
                        <p>
                            ID: ${student.id} |
                            Name: ${student.name} |
                            Marks: ${student.marks}
                        </p>
                    `;

                });

                document.getElementById("studentList").innerHTML = output;

            }
            catch (error) {

                console.log("Error:", error.message);

            }
            finally {

                console.log("Display operation completed.");

            }
        }


        // Clear Local Storage
        function clearStudents() {

            localStorage.removeItem("students");

            document.getElementById("studentList").innerHTML = "";

            alert("All students removed.");
        }


        // Display saved students when app starts
        displayStudents();