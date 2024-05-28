// Importa ícones específicos da biblioteca Ionicons
import { camera, trash, close } from 'ionicons/icons';

// Importa componentes do Ionic React
import { 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonFab, 
  IonFabButton, 
  IonIcon, 
  IonGrid, 
  IonRow, 
  IonCol, 
  IonImg, 
  IonActionSheet 
} from '@ionic/react';

// Importa o componente ExploreContainer
import ExploreContainer from '../components/ExploreContainer';

// Importa o arquivo de estilos CSS específico para este componente
import './Tab2.css';

// Importa o hook customizado usePhotoGallery
import { usePhotoGallery } from '../hooks/usePhotoGallery';

// Define o componente funcional Tab2
const Tab2: React.FC = () => {
  
  // Usa o hook usePhotoGallery e desestrutura a função takePhoto
  const { takePhoto } = usePhotoGallery();
  
  
  return (
    // Componente principal da página
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Photo Gallery</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
          <IonFab vertical="bottom" horizontal="center" slot="fixed">
        <IonFabButton onClick={() => takePhoto()}>
          <IonIcon icon={camera}></IonIcon>
        </IonFabButton>
      </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
