import { IonButton, IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import Intro1svg from '../assets/undraw_sign_up_n6im.svg'
import Intro2svg from '../assets/undraw_investor_update_re_qnuu.svg'
import Intro3svg from '../assets/undraw_completed_03xt.svg'
import './Intro.css'

interface ContainerProps {
    onFinish: () => void;
}

const SwiperButtonNext = ({ childern }: any) => {
    const swiper = useSwiper();
    return <IonButton onClick={() => swiper.slideNext()}>{childern}</IonButton>;
};

const Intro: React.FC<ContainerProps> = ({ onFinish }) => {
    return (
        <Swiper>
            <SwiperSlide>
                <img src={Intro1svg} alt="Intro 1" />
                <IonText>
                    <h3>Build awesome apps with Ionic UI components!</h3>
                </IonText>
                <SwiperButtonNext>Next</SwiperButtonNext>
            </SwiperSlide>

            <SwiperSlide>
                <img src={Intro2svg} alt="Intro 2" />
                <IonText>
                    <h3>Create powerful native apps with Capacitor.</h3>
                </IonText>
                <SwiperButtonNext>Next</SwiperButtonNext>
            </SwiperSlide>

            <SwiperSlide>
                <img src={Intro3svg} alt="Intro 3" />
                <IonText>
                    <h3>Enjoy learning to code!</h3>
                </IonText>
                <IonButton onClick={() => onFinish()}>Finish</IonButton>
            </SwiperSlide>
        </Swiper>
    );
};

export default Intro;