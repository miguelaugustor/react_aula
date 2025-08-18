//import Image from "next/image";
//import styles from "./page.module.css";

import { TodoList } from "@/components/components/TodoList";
import { Profile } from "@/components/components/Profile";

export default function Home() {
  return (
    <section>
      <h1>Olá Mundo!</h1>
      <Profile />
      <hr />
      <TodoList/>
    </section>
  );
}
