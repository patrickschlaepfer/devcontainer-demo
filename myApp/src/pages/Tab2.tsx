import { Barcode, BarcodeFormat, BarcodeScanner } from '@capacitor-mlkit/barcode-scanning';
import { IonAlert, IonButton, IonButtons, IonContent, IonHeader, IonItem, IonLifeCycleContext, IonList, IonMenuButton, IonPage, IonTitle, IonToolbar, useIonAlert, useIonViewWillEnter } from '@ionic/react';

import React, { useState } from 'react';

const Tab2: React.FC = () => {

    const barcodes: Barcode[] = [];
    const [showAlert] = useIonAlert();
    
    const [supported, isSupported] = useState<boolean>(false);

    useIonViewWillEnter(async () => {
        BarcodeScanner.isSupported().then((result) => {
             isSupported(result.supported);
        }).catch((error) => {
            showAlert({
                header: 'Error!',
                message: error,
                buttons: [
                    { text: 'Cancel', role: 'cancel'}
                ]
            })
        });
        console.log("supported: ", supported);
    });

    // const requestPermissions = async () => {
    //     const { camera } = await BarcodeScanner.requestPermissions();
    //     return camera === 'granted' || camera === 'limited';
    // };

    // const scan = async () => {
    //     const granted = await requestPermissions();
    //     if(!granted) {
    //         showAlert({
    //             header: 'Confirm!',
    //             message: 'Are you sure you want to delete all users?',
    //             buttons: [
    //                 { text: 'Cancel', role: 'cancel'}
    //             ]
    //         })
    //     }
    //     const { barcodes } = await BarcodeScanner.scan({
    //         formats: [BarcodeFormat.QrCode],
    //     });
    //     return barcodes[0].rawValue;
    // };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color={'success'}>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Barcode</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonButton expand="full">Take Barcode</IonButton>

                <IonList>
                    <IonItem>

                    </IonItem>
                </IonList>
                {!supported && (
                    <IonAlert>
                        Not Supported
                    </IonAlert>
                )}
            </IonContent>
        </IonPage>
    );
};

export default Tab2;
