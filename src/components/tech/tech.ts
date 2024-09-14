import { type Props as BadgeProps } from "../Badge.astro";

export const techMap: [string[], { type: string; color: string }][] = [
    [
      ["Javascript", "Typescript", "Python", "Clojure", "PHP", "Java"],
      {
        type: "Languages",
        color: "bg-tech-fe",
      },
    ],
    [
      ["React", "Vue.js", "jQuery", "Svelte", "Sveltekit", "Angular"],
      {
        type: "FE Framework",
        color: "bg-tech-fe-framework",
      },
    ],
    [
      ["CSS Modules", "Styled Components", "Mantine", "Bootstrap", "ShadCN"],
      {
        type: "FE Libraries",
        color: "bg-tech-fe-library",
      },
    ],
    [
      ["Django", "Spring Boot", "NestJS"],
      {
        type: "BE Framework",
        color: "bg-tech-be-framework",
      },
    ],
    [
      ["Postgres", "Elasticsearch", "MySQL", "SQL Server", "Prisma", "Supabase"],
      {
        type: "Databases and DB Tools",
        color: "bg-tech-db",
      },
    ],
    [
      ["git", "ANTLR", "Datadog", "Splunk", "Artifactory"],
      {
        type: "Dev Tools",
        color: "bg-tech-dev",
      },
    ],
  ];

  export const getOrderedTechList = (tech: string[]) => {
    const orderedList = []

    for (const [tl, _] of techMap) {
      for (const t of tech) {
        if (tl.includes(t)) {
          orderedList.push(t);
        }
      }
    }

    return orderedList
  }
  
  export const getColorByType = (value: BadgeProps["value"]) => {
    for (const [techList, output] of techMap) {
      if (techList.includes(value)) {
        return output.color;
      }
    }
    return "bg-red-500"
  };