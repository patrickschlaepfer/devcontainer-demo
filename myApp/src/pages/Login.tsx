import { IonButton, IonCard, IonCardContent, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonPage, IonRow, IonTitle, IonToolbar, useIonLoading, useIonRouter } from "@ionic/react";
import React, { useEffect, useState } from "react";

import { logInOutline, personCircleOutline } from 'ionicons/icons'

import FBG from '../assets/fbg_group.png'
import Intro from "../components/Intro";
import { Preferences } from "@capacitor/preferences";

const INTRO_KEY = 'intro-seen'

const Login: React.FC = () => {
    const router = useIonRouter();
    const [introSeen, setIntroSeen] = useState(true);
    const [present, dismiss] = useIonLoading();

    useEffect(() => {
        const checkStorge = async () => {
            const seen = await Preferences.get({ key: INTRO_KEY});
            console.log(" seen: ", seen);
            setIntroSeen(seen.value === 'true');
        }
        checkStorge();
    },[])

    const doLogin = async (event: any) => {
        event.preventDefault();
        await present('Logging in...');
        setTimeout(async () => {
            dismiss();
            router.push('/app', 'root');            
        }, 2000);
    };

    const finishIntro = async() => {
        setIntroSeen(true);
        Preferences.set({ key: INTRO_KEY, value: 'true'});
    };

    const seeIntroAgain = () => {
        setIntroSeen(false);
        Preferences.remove({ key: INTRO_KEY })
    }

    return (
        <>
        {!introSeen ? (
            <Intro onFinish={finishIntro} />
        ) : (
        <IonPage>
            <IonHeader>
                <IonToolbar color={'success'}>
                    <IonTitle>Free Code Camp</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent scrollY={false} className="ion-padding">
                <IonGrid fixed>
                    <IonRow class="ion-justify-content-center">
                        <IonCol size="12" sizeMd="8" sizeLg="6" sizeXl="4">
                            <div className="ion-text-center ion-padding">
                                <img src={FBG} alt="FBG Logo" />
                            </div>
                        </IonCol>
                    </IonRow>

                    <IonRow class="ion-justify-content-center">
                        <IonCol size="12" sizeMd="8" sizeLg="6" sizeXl="4">
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
                                        <IonButton onClick={seeIntroAgain} fill="clear" size='small' color={'secondary'} type='button' expand="block" className="ion-margin-top">
                                            Watch intro again
                                            <IonIcon icon={personCircleOutline} slot="end"/>
                                        </IonButton>
                                    </form>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                    </IonRow>

                </IonGrid>
            </IonContent>
        </IonPage>
        )}
        </>
    );
};

export default Login;