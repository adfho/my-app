import { useState, type FormEvent } from "react";

import Button from "../ui/Button/Button";
import Input from "../ui/Input/Input";
import styles from "./Services.module.css";
import { serviceGroups, type ServiceTabId } from "./ServicesData";

function Services() {
  const [activeTab, setActiveTab] = useState<ServiceTabId>("residential");

  const isResidential = activeTab === "residential";
  const activeServices = serviceGroups[activeTab];

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <section className={styles.services} id="services">
      <div className="container">
        <div className={styles.content}>
          <div className={styles.info}>
            <h2 className={styles.title}>Услуги</h2>

            <div className={styles.tabs} role="tablist" aria-label="Виды услуг">
              <button
                className={`${styles.tab} ${isResidential ? styles.tabActive : ""}`}
                type="button"
                role="tab"
                aria-selected={isResidential}
                onClick={() => setActiveTab("residential")}
              >
                Дизайн жилых интерьеров
              </button>

              <button
                className={`${styles.tab} ${!isResidential ? styles.tabActive : ""}`}
                type="button"
                role="tab"
                aria-selected={!isResidential}
                onClick={() => setActiveTab("business")}
              >
                Дизайн интерьеров для бизнеса
              </button>
            </div>

            <div className={styles.description}>
              <p>
                {activeServices.intro}
              </p>

              <p>Работа с нами — это:</p>

              <ul>
                {activeServices.benefits.map((benefit) => (
                  <li key={benefit}>{benefit}</li>
                ))}
              </ul>
            </div>

            <div className={styles.priceList}>
              {activeServices.services.map((service) => (
                <div className={styles.priceRow} key={service}>
                  <span>{service}</span>
                  <span>от 50 000 руб. за кв.м.</span>
                </div>
              ))}
            </div>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <h3 className={styles.formTitle}>Скидка на наши услуги 5%</h3>
            <p className={styles.formText}>
              Оставьте заявку на нашем сайте и получите скидку на ваш заказ
            </p>

            <label className={styles.visuallyHidden} htmlFor="services-name">
              Ваше имя
            </label>
            <Input
              className={styles.input}
              id="services-name"
              name="name"
              placeholder="Ваше имя"
              autoComplete="name"
            />

            <label className={styles.visuallyHidden} htmlFor="services-phone">
              Номер телефона
            </label>
            <Input
              className={styles.input}
              id="services-phone"
              name="phone"
              type="tel"
              placeholder="+7 (___) ___-__-__"
              autoComplete="tel"
            />

            <Button className={styles.submitButton} type="submit">
              Оставить заявку
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Services;
