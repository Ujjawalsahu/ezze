import styles from "./links.module.css"
function Links() {
  const links = [
    {
      title: "Individual",
      path: "/individual",
    },
    {
      title: "Department",
      path: "/department",
    },
    {
      title: "Organization",
      path: "/organization",
    }
  ];

  return (
    <div className={styles.container}>
    <div className={styles.links}>

      {links?.map((link) => (
        <a href={link?.path} key={link?.path}>
          {link?.title}
        </a>
      ))}
    </div>
    </div> 
  );
}

export default Links;
