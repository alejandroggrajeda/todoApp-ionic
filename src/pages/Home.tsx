import React from "react";
import {
  IonContent,
  IonPage,
  IonCard,
  IonCardContent,
  IonButton,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonProgressBar,
  IonText,
} from "@ionic/react";
import { arrowForward, briefcase, home, storefront } from "ionicons/icons";
import { useTasks } from "../context/TaskContext";

const Home: React.FC = () => {
  const { tasks } = useTasks();

  const total = tasks.length;
  const completed = tasks.filter((t) => t.isCompleted).length;
  const progress = total === 0 ? 0 : completed / total;

  // Conteo por tipo
  const workCount = tasks.filter((t) => t.type === "Trabajo" && !t.isCompleted).length;
  const homeCount = tasks.filter((t) => t.type === "Casa" && !t.isCompleted).length;
  const busCount = tasks.filter((t) => t.type === "Negocios" && !t.isCompleted).length;

  return (
    <IonPage>
      <IonContent fullscreen className="ion-padding" color="light">
        {/* Header Grande */}
        <div className="ion-margin-bottom">
          <IonText color="dark">
            <h1 style={{ fontWeight: "bold", marginBottom: "5px" }}>Hola Alejandro</h1>
            <p style={{ color: "#888", marginTop: "0" }}>Aqui esta tu resumen de hoy</p>
          </IonText>
        </div>

        {/* Tarjeta de progreso principal */}
        <IonCard className="welcome-card ion-no-margin">
          <IonCardContent>
            <h2>Tu Progreso</h2>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span>{completed} completadas</span>
              <span>{total} total</span>
            </div>
            <br />
            <IonProgressBar
              value={progress}
              color="light"
              style={{ height: "10px", borderRadius: "5px" }}
            ></IonProgressBar>
            <p style={{ marginTop: "10px", fontSize: "0.9em", opacity: 0.9 }}>
              {progress === 1 ? "Todo listo!!" : "Sigue asi!!"}
            </p>
          </IonCardContent>
        </IonCard>

        {/* Desglose por categorias */}
        <h3 style={{ marginLeft: "5px", marginTop: "25px" }}>Pendientes por Área</h3>
        <IonGrid className="ion-no-padding">
          <IonRow>
            <IonCol size="4">
              <div className="ion-text-center" style={{ background: "#fff", padding: "15px", borderRadius: "10px" }}>
                <IonIcon icon={briefcase} color="primary" style={{ fontSize: "24px" }} />
                <div style={{ fontWeight: "bold", fontSize: "18px" }}>{workCount}</div>
                <div style={{ fontSize: "10px", color: "#999" }}>TRABAJO</div>
              </div>
            </IonCol>
            <IonCol size="4">
              <div className="ion-text-center" style={{ background: "#fff", padding: "15px", borderRadius: "10px" }}>
                <IonIcon icon={home} color="success" style={{ fontSize: "24px" }} />
                <div style={{ fontWeight: "bold", fontSize: "18px" }}>{homeCount}</div>
                <div style={{ fontSize: "10px", color: "#999" }}>CASA</div>
              </div>
            </IonCol>
            <IonCol size="4">
              <div className="ion-text-center" style={{ background: "#fff", padding: "15px", borderRadius: "10px" }}>
                <IonIcon icon={storefront} color="warning" style={{ fontSize: "24px" }} />
                <div style={{ fontWeight: "bold", fontSize: "18px" }}>{busCount}</div>
                <div style={{ fontSize: "10px", color: "#999" }}>NEGOCIOS</div>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>

        <div style={{ marginTop: "30px" }}>
          <IonButton routerLink="/tasks" expand="block" size="large" color="dark" shape="round">
            Gestionar Tareas
            <IonIcon slot="end" icon={arrowForward} />
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
