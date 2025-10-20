import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

interface Student {
  id: number;
  name: string;
  email: string;
}

const Students: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setStudents(res.data));
  }, []);

  return (
    <div className="p-4">
      <h2>👩‍🎓 Danh sách sinh viên</h2>
      <ul>
        {students.map((s) => (
          <li key={s.id}>
            <Link to={`/students/${s.id}`}>{s.name}</Link> - {s.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Students;
