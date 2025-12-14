import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonChip,
  IonLabel,
} from "@ionic/react";
import { useParams } from "react-router";
import { useTasks } from "../context/TaskContext";

const TaskDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { getTask } = useTasks();
  const task = getTask(id);

  if (!task) {
    return (
      <IonPage>
        <IonContent>Tarea no encontrada</IonContent>
      </IonPage>
    );
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/tasks" />
          </IonButtons>
          <IonTitle>Detalles</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>Tipo: {task.type}</IonCardSubtitle>
            <IonCardTitle>{task.title}</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <h2>Descripción:</h2>
            <p>{task.description}</p>
            <br />
            <IonChip color={task.isCompleted ? "success" : "warning"}>
              <IonLabel>{task.isCompleted ? "Completada" : "Pendiente"}</IonLabel>
            </IonChip>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default TaskDetail;
