import { Routes } from '@angular/router';
import { ListarcolorComponent } from './components/colors/listarcolor/listarcolor.component';
import { CrearcolorComponent } from './components/colors/crearcolor/crearcolor.component';
import { EliminarcolorComponent } from './components/colors/eliminarcolor/eliminarcolor.component';
import { ListarComentaryComponent } from './components/comentary/listar-comentary/listar-comentary.component';
import { CrearComentaryComponent } from './components/comentary/crear-comentary/crear-comentary.component';
import { EliminarComentaryComponent } from './components/comentary/eliminar-comentary/eliminar-comentary.component';
import { ListarDiagnosticComponent } from './components/diagnostic/listar-diagnostic/listar-diagnostic.component';
import { CrearDiagnosticComponent } from './components/diagnostic/crear-diagnostic/crear-diagnostic.component';
import { EliminarDiagnosticComponent } from './components/diagnostic/eliminar-diagnostic/eliminar-diagnostic.component';
import { ListarFlashcardComponent } from './components/flashcard/listar-flashcard/listar-flashcard.component';
import { CrearFlashcardComponent } from './components/flashcard/crear-flashcard/crear-flashcard.component';
import { EliminarFlashcardComponent } from './components/flashcard/eliminar-flashcard/eliminar-flashcard.component';
import { ListarFlashcardimgComponent } from './components/flashcardimg/listar-flashcardimg/listar-flashcardimg.component';
import { CrearFlashcardimgComponent } from './components/flashcardimg/crear-flashcardimg/crear-flashcardimg.component';
import { EliminarFlashcardimgComponent } from './components/flashcardimg/eliminar-flashcardimg/eliminar-flashcardimg.component';
import { EliminarflashcardthemeComponent } from './components/flashcardtheme/eliminarflashcardtheme/eliminarflashcardtheme.component';
import { CrearflashcardthemeComponent } from './components/flashcardtheme/crearflashcardtheme/crearflashcardtheme.component';
import { ListarflashcardthemeComponent } from './components/flashcardtheme/listarflashcardtheme/listarflashcardtheme.component';

export const routes: Routes = [
    {
path: '',
redirectTo: 'color',
pathMatch: 'full'
},

// Colores
{ path: 'color', component: ListarcolorComponent },
{ path: 'color/nuevo', component: CrearcolorComponent },
{ path: 'color/eliminar', component: EliminarcolorComponent },

// Comentarios
{ path: 'comentary', component: ListarComentaryComponent },
{ path: 'comentary/nuevo', component: CrearComentaryComponent },
{ path: 'comentary/eliminar', component: EliminarComentaryComponent },

// Diagnóstico
{ path: 'diagnostic', component: ListarDiagnosticComponent },
{ path: 'diagnostic/nuevo', component: CrearDiagnosticComponent },
{ path: 'diagnostic/eliminar', component: EliminarDiagnosticComponent },

// Flashcard
{ path: 'flashcard', component: ListarFlashcardComponent },
{ path: 'flashcard/nuevo', component: CrearFlashcardComponent },
{ path: 'flashcard/eliminar', component: EliminarFlashcardComponent },

// FlashcardImg
{ path: 'flashcardimg', component: ListarFlashcardimgComponent },
{ path: 'flashcardimg/nuevo', component: CrearFlashcardimgComponent },
{ path: 'flashcardimg/eliminar', component: EliminarFlashcardimgComponent },

// FlashcardTheme
{ path: 'flashcardtheme', component: ListarflashcardthemeComponent },
{ path: 'flashcardtheme/nuevo', component: CrearflashcardthemeComponent },
{ path: 'flashcardtheme/eliminar', component: EliminarflashcardthemeComponent },

// Página por defecto
{
path: '**',
redirectTo: 'color'
}
];

