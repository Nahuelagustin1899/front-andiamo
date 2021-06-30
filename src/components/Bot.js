import React from 'react';
import ChatBot from 'react-simple-chatbot';
import Menu from '@material-ui/core/Menu';
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import Button from '@material-ui/core/Button';
function Bot() {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div className="div-bot">
            <Button>
                <IoChatbubbleEllipsesSharp className="bot" aria-controls="simple-menu" aria-haspopup="2" onClick={handleClick}>
                </IoChatbubbleEllipsesSharp>
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <ChatBot
                    steps={[
                        {
                            id: '1',
                            message: '¿Qué información estabas buscando?',
                            trigger: '2',
                        },
                        {
                            id: '2',
                            options: [
                                { value: 1, label: 'Lugares', trigger: 'lugares' },
                                { value: 2, label: 'Empresas', trigger: 'empresas' },
                                { value: 3, label: 'Menores de edad', trigger: 'datos' },
                            ],
                        },

                        {
                            id: 'datos',
                            options: [
                                { value: 1, label: 'Menores hasta 12 años', trigger: '12' },
                                { value: 2, label: 'Menores de 13 a 17 años', trigger: '1373' },
                            ],
                        },

                        {
                            id: '12',
                            message: 'Deberán viajar SIEMPRE acompañados de: Padre, madre o un (1) representante legal o persona autorizada.',
                            trigger: 2,
                        },

                        {
                            id: '1373',
                            message: 'Deberán viajar acompañados de: Padre, madre o un (1) representante legal. O sin acompañante : con autorización otorgada por al menos un (1) representante legal acreditando la representación mediante',
                            trigger: 2,
                        },

                        {
                            id: 'lugares',

                            options: [
                                { value: 1, label: 'Mar del Plata', trigger: 'mardel' },
                                { value: 2, label: 'Pinamar', trigger: 'pinamar' },
                                { value: 3, label: 'Villa Gesell', trigger: 'gesell' },
                                { value: 4, label: 'Necochea', trigger: 'necochea' },
                                { value: 5, label: 'Miramar', trigger: 'miramar' },
                                { value: 6, label: 'Mar del Tuyú', trigger: 'tuyu' },
                                { value: 7, label: 'San Clemente', trigger: 'clemente' },
                                { value: 8, label: 'Santa Teresita', trigger: 'teresita' },
                                { value: 9, label: 'San Bernardo', trigger: 'bernardo' },
                                { value: 10, label: 'La Lucila', trigger: 'lucila' },
                                { value: 11, label: 'Mar de Ajó', trigger: 'ajo' },
                            ],
                        },
                        {
                            id: 'mardel',
                            message: 'Mar del Plata, conocida popularmente como la Ciudad Feliz, es una ciudad ubicada en el sudeste de la provincia de Buenos Aires, Argentina, sobre la costa del mar argentino. Está ubicada a 365 km de La Plata.',
                            trigger: 2,
                        },

                        {
                            id: 'pinamar',
                            message: 'Pinamar es una ciudad de la costa del Atlántica de Argentina. Es conocida por su arquitectura distintiva, con casas ubicadas en jardines abiertos y con bosques de pinos circundantes. Las playas se extitriggeren por toda su costa.',
                            trigger: 2,
                        },
                        {
                            id: 'gesell',
                            message: 'Villa Gesell, también llamada coloquialmente Gesell. Está ubicada en el extremo este de la provincia de Buenos Aires, sobre las costas del mar Argentino.',
                            trigger: 2,
                        },
                        {
                            id: 'necochea',
                            message: 'Necochea es una ciudad ubicada al sur de la Provincia de Buenos Aires, sobre la costa atlántica, en Argentina. Posee amplias playas y un importante puerto al encontrarse en la desembocadura del río Quequén Grande y el mar Argentino.',
                            trigger: 2,
                        },
                        {
                            id: 'miramar',
                            message: 'Miramar es una ciudad costera argentina situada en el sudeste de la provincia de Buenos Aires. Es un importante centro turístico. Se encuentra a 48 km de Mar del Plata y a 448 km de la ciudad de Buenos Aires.',
                            trigger: 2,
                        },
                        {
                            id: 'tuyu',
                            message: 'Mar del Tuyú es una ciudad balnearia y turística argentina, cabecera del partido de La Costa, provincia de Buenos Aires, en la costa atlántica.​ Sus playas se caracterizan por ser llanas y un anchas acompañadas por los frondosos médanos.',
                            trigger: 2,
                        },
                        {
                            id: 'clemente',
                            message: 'San Clemente del Tuyú es una ciudad balnearia y turística argentina del partido de La Costa en la provincia de Buenos Aires. Está ubicada sobre la costa septentrional del Mar Argentino.',
                            trigger: 2,
                        },
                        {
                            id: 'teresita',
                            message: 'Santa Teresita es una ciudad turística argentina, en el partido de La Costa, provincia de Buenos Aires. La localidad ha nacido y crecido con un fin turístico entorno al clima templado oceánico y a sus playas.',
                            trigger: 2,
                        },
                        {
                            id: 'bernardo',
                            message: 'San Bernardo del Tuyú, popularmente conocida como San Bernardo, es una ciudad balnearia y turística argentina en el partido de La Costa, provincia de Buenos Aires. Sus playas son bañadas por el mar Argentino, en el accidente conocido como cabo San Antonio.',
                            trigger: 2,
                        },
                        {
                            id: 'lucila',
                            message: 'Lucila del Mar es una localidad balnearia y turística argentina, en el partido de La Costa, provincia de Buenos Aires. Ofrece comodidad a sus visitantes y tiene variadas ofertas gastronómicas.',
                            trigger: 2,
                        },
                        {
                            id: 'ajo',
                            message: 'Mar de Ajó es una ciudad balnearia y turística del partido de La Costa, provincia de Buenos Aires. Ofrece amplias y tranquilas playas, importante hotelería, casino, bingo, teatro, cines, autódromo y zona de altos médanos.',
                            trigger: 2,
                        },
                        {
                            id: 'empresas',

                            options: [
                                { value: 1, label: 'Plusmar', trigger: 'plusmar' },
                                { value: 2, label: 'Ruta Atlántica', trigger: 'ruta' },
                                { value: 3, label: 'Chevallier', trigger: 'chevallier' },
                                { value: 4, label: 'Flecha Bus', trigger: 'flecha' },
                                { value: 5, label: 'Cata', trigger: 'cata' },
                            ],
                        },
                        {
                            id: 'plusmar',
                            message: 'Plusmar se encuentra desde hace ya muchos años a la vanguardia de las empresas de transporte de larga distancia, brindando a sus pasajeros un nivel de excelencia',
                            trigger: 2,
                        },
                        {
                            id: 'ruta',
                            message: 'Nuestra prioridad es lograr la satisfacción del cliente en servicio, puntualidad, costo y calidad en todos los aspectos de nuestra empresa.',
                            trigger: 2,
                        },
                        {
                            id: 'cata',
                            message: 'En 1933 nació la Compañía Argentina de Transporte Automóvil (C.A.T.A.), fundada por el Sr. Juan E. Ramoni, ofrecitriggero el servicio de transporte a todas las provincias de Argentina',
                            trigger: 2,
                        },
                        {
                            id: 'chevallier',
                            message: 'Nueva Chevallier S.A. es una empresa de ómnibus de larga distancia de origen argentino. Fue fundada el 5 de junio de 1935 por el Ingeniero Chevallier Boutell bajo el nombre Transportes Automotores Chevallier.',
                            trigger: 2,
                        },
                        {
                            id: 'flecha',
                            message: 'La Empresa de Transporte de Derudder Hermanos S.R.L., más conocida como Flecha Bus o Flecha, es una empresa de ómnibus de larga distancia y grupo empresarial de Argentina dedicado al transporte público de pasajeros y al turismo',
                            trigger: 2,
                        },

                        {
                            id: '6',
                            message: 'Awesome! You are a telepath!',
                            trigger: 2,
                        },

                    ]}
                />
            </Menu>

        </div>);
}

export default Bot;