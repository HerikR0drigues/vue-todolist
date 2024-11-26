import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Importar ícones que você deseja usar
import { faCoffee, faCheckCircle, faPlus, faTrash, faCheck, faEdit } from '@fortawesome/free-solid-svg-icons';

// Adicione os ícones à biblioteca
library.add(faCoffee, faCheckCircle, faPlus, faTrash, faCheck, faEdit);

export default FontAwesomeIcon;
