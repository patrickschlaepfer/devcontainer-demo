import { IonButton, IonCard, IonCardContent, IonContent, IonHeader, IonIcon, IonInput, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import React from "react";

import { logInOutline, personCircleOutline } from 'ionicons/icons'

import FBG from '../assets/fbg_group.png'

const Login: React.FC = () => {
    const doLogin = (event: any) => {
        event.preventDefault();
        console.log('doLogin')
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color={'success'}>
                    <IonTitle>Free Code Camp</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent scrollY={false}>
                <div className="ion-text-center ion-padding">
                    <img src={FBG} alt="FBG Logo" />
                </div>
                <IonCard>
                    <IonCardContent>
                        <form onSubmit={doLogin}>
                            <IonInput fill="outline" labelPlacement="floating" label="Email" type='email' placeholder="patrick@schlaepfer.com"></IonInput>
                            <IonInput className="ion-margin-top" fill="outline" labelPlacement="floating" label="Password" type='password'></IonInput>
                            <IonButton className="ion-margin-top" type="submit" expand="block">
                                Login
                                <IonIcon icon={logInOutline} slot="end"/>
                            </IonButton>
                            <IonButton routerLink="/register" color={'secondary'} type='button' expand="block" className="ion-margin-top">
                                Create account
                                <IonIcon icon={personCircleOutline} slot="end"/>
                            </IonButton>
                        </form>
                    </IonCardContent>
                </IonCard>
            </IonContent>
            
        </IonPage>
    );
};

export default Login;