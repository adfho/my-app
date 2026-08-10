import conceptImage from "../../assets/images/work-stages/work-stages-main.png";
import planningImage from "../../assets/images/work-stages/planning.png";
import visualizationImage from "../../assets/images/work-stages/visualization.png";
import documentationImage from "../../assets/images/work-stages/documentation.png";
import specificationImage from "../../assets/images/work-stages/specification.png";
import supplyImage from "../../assets/images/work-stages/supply.png";
import repairImage from "../../assets/images/work-stages/repair.png";

const stages = [
  {
    id: "concept",
    title: "Концепция",
    description:
      "Здесь мы общаемся с клиентом, изучаем его пожелания, образ жизни, вкусовые предпочтения, функциональные потребности и формируем общее видение пространства и стилистическое направление.",
    image: conceptImage,
    alt: "Концепция современного интерьера",
  },
  {
    id: "planning",
    title: "Проектирование",
    description:
      "Разрабатываем детализированные планировочные решения с учетом функциональных зон, мебели и других элементов интерьера. Здесь наша главная задача: сделать пространство эргономичным и комфортным для клиента.",
    image: planningImage,
    alt: "Этап проектирования интерьера",
  },
  {
    id: "visualization",
    title: "3D визуализация",
    description:
      "Создаём трехмерные модели интерьера, чтобы вы увидели конечный результат до начала реализации, согласовали детали и внесли нужные корректировки.",
    image: visualizationImage,
    alt: "3D визуализация интерьера",
  },
  {
    id: "documentation",
    title: "Разработка технической документации",
    description:
      "Делаем подробные чертежи, схемы и описания, с которыми будут работать строители, для точной реализации проекта.",
    image: documentationImage,
    alt: "Техническая документация проекта",
  },
  {
    id: "specification",
    title: "Спецификация",
    description:
      "Детально расписываем с артикулами все материалы, оборудование и мебель для проекта. Этот документ служит основой закупки для менеджера или для вас, если решите реализовывать проект самостоятельно.",
    image: specificationImage,
    alt: "Подбор материалов для интерьера",
  },
  {
    id: "supply",
    title: "Комплектация",
    description:
      "Важный этап закупки, контроля доставки и качества всех товаров, указанных в спецификации. Комплектатор возьмет все эти задачи на себя, чтобы подготовить проект к финальной стадии – ремонтным работам.",
    image: supplyImage,
    alt: "Комплектация интерьера",
  },
  {
    id: "repair",
    title: "Ремонтные работы",
    description:
      "Финальный и самый главный этап – воплощение в жизнь всего проекта. Здесь наши специалисты: инженеры и строители делают демонтаж старых покрытий и мебели, черновую и чистовую отделку, устанавливают мебель и элементы декора. Благодаря слаженной работе на всех этапах, реализация проекта заканчивается в установленный срок.",
    image: repairImage,
    alt: "Ремонтные работы в интерьере",
  },
];

export default stages;
