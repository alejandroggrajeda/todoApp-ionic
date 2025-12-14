import React, { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonFab,
  IonFabButton,
  IonIcon,
  IonModal,
  IonButtons,
  IonButton,
  IonInput,
  IonSelect,
  IonSelectOption,
  IonTextarea,
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonCard,
  IonCardContent,
  IonChip,
  IonCheckbox,
} from "@ionic/react";
import { add, trash, arrowBack } from "ionicons/icons";
import { useTasks } from "../context/TaskContext";

const TaskList: React.FC = () => {
  const { tasks, toggleComplete, deleteTask, addTask } = useTasks();
  const [showModal, setShowModal] = useState(false);
  const [filter, setFilter] = useState<"pending" | "completed">("pending");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [type, setType] = useState("Trabajo");

  const handleAdd = () => {
    if (title.trim()) {
      addTask(title, desc || "", type);
      setShowModal(false);
      setTitle("");
      setDesc("");
    }
  };

  // filtrar tareas segun segmento
  const filteredTasks = tasks.filter((t) => (filter === "pending" ? !t.isCompleted : t.isCompleted));

  const getBorderClass = (type: string) => {
    switch (type) {
      case "Trabajo":
        return "border-trabajo";
      case "Casa":
        return "border-casa";
      case "Negocios":
        return "border-negocios";
      default:
        return "";
    }
  };

  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton routerLink="/home" color="dark">
              <IonIcon icon={arrowBack} />
            </IonButton>
          </IonButtons>
          <IonTitle style={{ fontWeight: "bold" }}>Mis Tareas</IonTitle>
        </IonToolbar>

        {/* Segmento para filtrar */}
        <IonToolbar>
          <IonSegment value={filter} onIonChange={(e) => setFilter(e.detail.value as any)}>
            <IonSegmentButton value="pending">
              <IonLabel>Pendientes</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="completed">
              <IonLabel>Hechas</IonLabel>
            </IonSegmentButton>
          </IonSegment>
        </IonToolbar>
      </IonHeader>

      <IonContent color="light" className="ion-padding">
        {filteredTasks.length === 0 && (
          <div className="ion-text-center ion-padding" style={{ marginTop: "50px", color: "#999" }}>
            <p>No hay tareas en esta sección.</p>
          </div>
        )}

        {filteredTasks.map((task) => (
          <IonCard key={task.id} className={`task-card ${getBorderClass(task.type)}`}>
            <IonCardContent>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                {/* Checkbox y Texto */}
                <div style={{ display: "flex", alignItems: "center", flex: 1 }} onClick={() => toggleComplete(task.id)}>
                  <IonCheckbox checked={task.isCompleted} style={{ marginRight: "15px" }} />
                  <div>
                    <h2
                      style={{
                        fontWeight: "bold",
                        margin: 0,
                        fontSize: "1.1rem",
                        textDecoration: task.isCompleted ? "line-through" : "none",
                        color: task.isCompleted ? "#aaa" : "#000",
                      }}
                    >
                      {task.title}
                    </h2>
                    <IonChip
                      outline
                      color="medium"
                      style={{ height: "20px", fontSize: "10px", marginLeft: 0, marginTop: "5px" }}
                    >
                      {task.type}
                    </IonChip>
                  </div>
                </div>

                {/* Boton Ver Detalles*/}
                <IonButton fill="clear" routerLink={`/tasks/${task.id}`}>
                  Ver
                </IonButton>

                {/* Boton Eliminar */}
                <IonButton fill="clear" color="danger" onClick={() => deleteTask(task.id)}>
                  <IonIcon icon={trash} slot="icon-only" />
                </IonButton>
              </div>
            </IonCardContent>
          </IonCard>
        ))}

        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton color="dark" onClick={() => setShowModal(true)}>
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>

        {/* Modal de Agregar */}
        <IonModal
          isOpen={showModal}
          onDidDismiss={() => setShowModal(false)}
          breakpoints={[0, 0.75, 1]}
          initialBreakpoint={0.75}
        >
          <IonContent className="ion-padding">
            <div className="ion-text-center ion-margin-top">
              <h3>Nueva Tarea</h3>
            </div>

            <IonLabel color="medium">Título</IonLabel>
            <IonInput
              className="ion-margin-bottom"
              style={{ borderBottom: "1px solid #ddd" }}
              placeholder="Ej: Comprar leche"
              value={title}
              onIonChange={(e) => setTitle(e.detail.value!)}
            />

            <IonLabel color="medium">Descripción</IonLabel>
            <IonTextarea
              className="ion-margin-bottom"
              style={{ borderBottom: "1px solid #ddd", minHeight: "100px" }}
              placeholder="Detalles adicionales..."
              value={desc}
              onIonChange={(e) => setDesc(e.detail.value!)}
            />

            <IonLabel color="medium">Categoría</IonLabel>
            <IonSelect
              value={type}
              interface="action-sheet"
              placeholder="Seleccionar"
              onIonChange={(e) => setType(e.detail.value)}
              style={{ background: "#f0f0f0", borderRadius: "8px", marginTop: "10px", paddingLeft: "10px" }}
            >
              <IonSelectOption value="Trabajo">Trabajo</IonSelectOption>
              <IonSelectOption value="Casa">Casa</IonSelectOption>
              <IonSelectOption value="Negocios">Negocios</IonSelectOption>
            </IonSelect>

            <IonButton expand="block" color="dark" className="ion-margin-top" onClick={handleAdd}>
              Crear Tarea
            </IonButton>
            <IonButton expand="block" fill="clear" color="medium" onClick={() => setShowModal(false)}>
              Cancelar
            </IonButton>
          </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default TaskList;
