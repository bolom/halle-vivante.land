import React from 'react';
import { 
  Mail, 
  Leaf, 
  Sun, 
  Quote, 
  Eye, 
  Users, 
  Zap, 
  Globe,
  ArrowDown,
  MapPin,
  ExternalLink,
  Info,
  Building2,
  Snowflake
} from 'lucide-react';

// --- Configuration ---
const IMG_PREFIX = "/assets/images/";
const MARION_PORTRAIT = "/assets/images/marion-portrait.png"; // Updated to local path
const VIDEO_URL = "https://player.vimeo.com/video/1153944632?title=0&byline=0&portrait=0";
const EMAIL = "contact@marion.land";
const MARION_SITE = "marion.land";
const PROJECT_SITE = "halle-vivante.land";

// --- Components ---

const FloatingIcon = ({ children, delay = 0 }: { children?: React.ReactNode, delay?: number }) => (
  <div className="animate-float" style={{ animationDelay: `${delay}s` }}>
    {children}
  </div>
);

const MarginNote = ({ title, children }: { title: string, children?: React.ReactNode }) => (
  <div className="md:absolute md:left-full md:ml-12 md:w-72 mt-8 md:mt-0 border-l-2 border-amber-600/30 pl-6 py-2 bg-amber-50/20 md:bg-transparent rounded-r-2xl">
    <span className="text-[10px] uppercase tracking-[0.4em] font-black text-amber-700/60 block mb-2">{title}</span>
    <div className="text-[13px] text-stone-500 leading-relaxed font-light italic">
      {children}
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#fbfaf5] selection:bg-amber-100 selection:text-emerald-950 overflow-x-hidden">
      
      {/* --- 1. HERO --- */}
      <header className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-[80%] h-[80%] bg-emerald-50/50 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-amber-50/40 rounded-full blur-[100px]" />
        </div>
        
        <div className="relative z-10 space-y-12">
          <div className="flex items-center justify-center gap-4 opacity-0 animate-[reveal_1.5s_ease-out_forwards]">
            <span className="text-[11px] uppercase tracking-[1em] text-stone-400 font-bold">Saint-Sauveur-en-Puisaye</span>
          </div>
          
          <h1 className="text-6xl md:text-[12rem] font-serif leading-[0.8] tracking-tighter text-stone-900">
            La Halle <br />
            <span className="italic font-light text-emerald-950 flex items-center justify-center gap-4 md:gap-8">
              <FloatingIcon><Leaf className="w-12 h-12 md:w-20 md:h-20 text-amber-600/10" strokeWidth={0.5} /></FloatingIcon>
              Vivante
              <FloatingIcon delay={1}><Sun className="w-12 h-12 md:w-20 md:h-20 text-amber-600/10" strokeWidth={0.5} /></FloatingIcon>
            </span>
          </h1>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-2xl md:text-4xl text-stone-400 font-serif italic">
              Un nouveau cœur battant pour Saint-Sauveur-en-Puisaye
            </p>
          </div>

          <div className="pt-24 animate-bounce text-stone-300">
            <ArrowDown size={24} strokeWidth={1} />
          </div>
        </div>
      </header>

      {/* --- 2. VIDEO --- */}
      <section className="py-24 bg-stone-950 overflow-hidden relative">
         <div className="container mx-auto px-6 max-w-7xl">
            <div className="aspect-video rounded-[3rem] md:rounded-[5rem] overflow-hidden shadow-2xl bg-black border border-white/5 relative z-10">
              <iframe 
                src={VIDEO_URL} 
                className="w-full h-full"
                frameBorder="0" 
                allow="autoplay; fullscreen; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
            <div className="mt-12 text-center relative z-10">
               <p className="text-stone-400 font-serif italic text-2xl tracking-wide opacity-80">L'Esprit de la Halle : Architecture, Paysage et Vie</p>
            </div>
         </div>
      </section>

      {/* --- 3. EDITO & PORTRAIT --- */}
      <section className="py-32 md:py-64 container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-24 items-start relative">
          <div className="sticky top-24">
            <div className="relative group space-y-12">
              <div className="relative">
                <div className="aspect-[3/4] rounded-[4rem] overflow-hidden shadow-2xl bg-white p-2 border border-stone-100">
                  <img src={MARION_PORTRAIT} alt="Marion Godiard" className="w-full h-full object-cover rounded-[3.5rem] grayscale-[0.2] transition-all duration-1000" />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-emerald-950 p-8 rounded-3xl text-white shadow-2xl border border-white/10">
                  <Quote size={24} className="text-amber-500 mb-2 opacity-50" />
                  <p className="font-serif italic text-xl leading-snug">"Je suis aussi votre boulangère."</p>
                  <div className="h-px w-8 bg-amber-500/30 my-3"></div>
                  <p className="text-[9px] uppercase tracking-[0.2em] font-bold text-amber-500/50">Marion Godiard</p>
                </div>
              </div>
              
              <div className="pt-4 px-4">
                <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-stone-400 block mb-4">Situation Actuelle</span>
                <div className="aspect-video rounded-3xl overflow-hidden border border-stone-200 shadow-inner">
                  <img src="/assets/images/ancienne_friche_gamm_vert.png" className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700" alt="Ancienne friche Gamm Vert" />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-20">
            <div className="space-y-6">
              <span className="text-[11px] uppercase tracking-[0.6em] font-bold text-amber-600 block">Édito : Une vision née du terrain</span>
              <h2 className="text-5xl md:text-8xl font-serif text-stone-900 leading-[0.9] tracking-tighter">Mettre mon expertise <br/><span className="italic text-stone-300">au service de notre cité.</span></h2>
            </div>
            
            <div className="space-y-12 text-xl md:text-2xl text-stone-600 font-light leading-relaxed relative text-justify">
              <p>
                Je m'appelle Marion Godiard. Architecte-paysagiste de formation, j'ai choisi de mettre mon expertise au service des territoires qui me sont chers. Mais mon lien avec Saint-Sauveur-en-Puisaye va bien au-delà des plans : je suis aussi votre boulangère.
              </p>
              
              <p className="italic text-stone-500 border-l-2 border-stone-200 pl-8 py-4">
                "Chaque mercredi matin, derrière mon étal sur le marché, je vis le rythme de notre cité. Je connais la lumière magnifique du printemps, mais aussi le vent cinglant de janvier qui écourte les échanges et refroidit les mains. C'est cette double expérience qui a donné naissance au projet de la Halle Vivante : transformer l’ancienne friche « Gamm Vert » en un lieu qui protège, rassemble et inspire, quelle que soit la saison."
              </p>
              
              <div className="pt-8 border-t border-stone-100 flex items-center gap-6">
                 <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-900">
                    <MapPin size={20} />
                 </div>
                 <p className="text-sm uppercase tracking-widest font-black text-stone-400">Ancienne friche Gamm Vert • Saint-Sauveur-en-Puisaye</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 4. CHANTIER VIVANT --- */}
      <section className="py-48 bg-stone-50 border-t border-stone-100">
         <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center mb-32 max-w-4xl mx-auto space-y-8">
               <span className="text-[11px] uppercase tracking-[0.6em] font-bold text-amber-600 block">L'Aventure Collective</span>
               <h2 className="text-6xl md:text-9xl font-serif italic text-stone-900 leading-[0.85] tracking-tighter">Un chantier vivant.</h2>
               <p className="text-2xl text-stone-400 font-light italic">"La construction de la Halle Vivante ne sera pas une zone bruyante et fermée derrière des palissades."</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-12 mb-32">
               {[
                 { 
                   icon: Users, 
                   title: "Filière ultra-courte", 
                   desc: "Nous travaillons avec un collectif de charpentiers locaux utilisant des chênes de nos forêts et une toiture en tuiles de bois." 
                 },
                 { 
                   icon: Eye, 
                   title: "Événement fédérateur", 
                   desc: "Le site sera vivant dès le premier coup de pioche. Des visites publiques et des ateliers permettront aux habitants de suivre l'avancement et de s'approprier le lieu." 
                 },
                 { 
                   icon: Zap, 
                   title: "Gestion intelligente", 
                   desc: "Ce format de chantier pédagogique permet d'étaler les investissements pour la commune, garantissant ainsi une gestion financière saine et sereine." 
                 }
               ].map((item, idx) => (
                 <div key={idx} className="p-16 rounded-[4rem] bg-white border border-stone-100 group hover:bg-emerald-950 transition-all duration-700 shadow-sm">
                    <item.icon size={48} className="text-amber-600 mb-8 group-hover:text-amber-400 transition-colors" strokeWidth={1} />
                    <h4 className="text-3xl font-serif italic mb-6 text-stone-900 group-hover:text-white">{item.title}</h4>
                    <p className="text-stone-500 leading-relaxed font-light group-hover:text-stone-400 text-justify">{item.desc}</p>
                 </div>
               ))}
            </div>

            {/* Galerie d'étapes de chantier : Visuels spécifiques */}
            <div className="grid md:grid-cols-3 gap-8">
               <div className="space-y-4">
                  <div className="aspect-[4/3] rounded-[3rem] overflow-hidden shadow-lg border border-stone-100 relative group">
                     <img src="/assets/images/ancienne_friche_gamm_vert.png" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Étape 0 : Situation actuelle" />
                     <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-colors"></div>
                  </div>
                  <p className="text-center text-[10px] uppercase tracking-widest font-black text-stone-400 italic">Étape 0 : Situation actuelle</p>
               </div>
               <div className="space-y-4">
                  <div className="aspect-[4/3] rounded-[3rem] overflow-hidden shadow-lg border border-stone-100 relative group">
                     <img src="/assets/images/etape_charpente_apparente.png" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Étape : Charpente apparente" />
                     <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-colors"></div>
                  </div>
                  <p className="text-center text-[10px] uppercase tracking-widest font-black text-stone-400 italic">Étape : Charpente apparente</p>
               </div>
               <div className="space-y-4">
                  <div className="aspect-[4/3] rounded-[3rem] overflow-hidden shadow-lg border border-stone-100 relative group">
                     <img src="/assets/images/etape_charpente_finie.png" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Étape : Charpente finie" />
                     <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-colors"></div>
                  </div>
                  <p className="text-center text-[10px] uppercase tracking-widest font-black text-stone-400 italic">Étape : Charpente finie</p>
               </div>
            </div>
         </div>
      </section>

      {/* --- FEATURED: LA HALLE EN HIVER (Mise en avant demandée) --- */}
      <section className="relative min-h-[120vh] flex items-center justify-center overflow-hidden bg-stone-900">
         <div className="absolute inset-0">
            <img
               src="/assets/images/halle_vivante_hiver.png"
               className="w-full h-full object-cover opacity-60 scale-105"
               alt="La Halle Vivante en Hiver"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-stone-950/40"></div>
         </div>
         
         <div className="container mx-auto px-6 relative z-10 text-center md:text-left">
            <div className="max-w-4xl space-y-12">
               <div className="flex items-center gap-6 justify-center md:justify-start">
                  <div className="w-20 h-px bg-amber-500/50"></div>
                  <span className="text-[12px] uppercase tracking-[0.8em] font-black text-amber-500">Vision Finale</span>
               </div>
               
               <h2 className="text-6xl md:text-9xl font-serif italic text-white leading-[0.85] tracking-tighter">
                  Un refuge <br/>
                  <span className="text-stone-300">contre l'hiver.</span>
               </h2>
               
               <div className="grid md:grid-cols-2 gap-12 pt-12 text-left">
                  <p className="text-2xl text-stone-200 font-light leading-relaxed italic">
                     "Imaginez un matin de janvier. Alors que la neige recouvre Saint-Sauveur, la Halle Vivante reste un havre de chaleur humaine."
                  </p>
                  <div className="space-y-6">
                     <div className="flex items-start gap-4">
                        <Snowflake className="text-amber-500 shrink-0 mt-1" size={20} />
                        <p className="text-stone-400 text-lg">Un espace protégé des intempéries pour maintenir le lien social toute l'année.</p>
                     </div>
                     <div className="flex items-start gap-4">
                        <Sun className="text-amber-500 shrink-0 mt-1" size={20} />
                        <p className="text-stone-400 text-lg">L'odeur du pain chaud et du café de comptoir qui réchauffe le cœur de notre cité.</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* --- 5. LA PROMENADE D'USAGE --- */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 max-w-5xl text-center mb-32">
           <span className="text-[11px] uppercase tracking-[0.6em] font-bold text-emerald-900 block mb-6">Immersion</span>
           <h2 className="text-5xl md:text-8xl font-serif italic text-stone-900">Le parcours d'usage.</h2>
           <p className="mt-8 text-xl text-stone-400 font-light italic">"Découvrez comment le site s'intègre dans votre quotidien."</p>
        </div>

        {/* Etape 1 : Paysage */}
        <div className="py-32 container mx-auto px-6 max-w-7xl">
           <div className="grid md:grid-cols-2 gap-24 items-center">
              <div className="relative space-y-10 order-2 md:order-1">
                 <h3 className="text-4xl md:text-6xl font-serif text-stone-900 italic leading-none">1. Une pause face <br/> au grand paysage</h3>
                 <p className="text-xl text-stone-500 font-light leading-relaxed text-justify">
                    Tout commence sur le parking en surplomb, point d'entrée stratégique pour tous. Ici, vous découvrez le jardin suspendu. Avant de descendre faire vos courses, vous faites une pause sur le belvédère pour admirer la vue dégagée sur la vallée du Loing. La végétation locale renforce le talus et vous offre une parenthèse de calme face au bocage.
                 </p>
                 <MarginNote title="Biodiversité">
                    Plantes mellifères et essences locales de Puisaye.
                 </MarginNote>
              </div>
              <div className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl relative">
                 <img src="/assets/images/belvedere_loing.png" className="w-full h-full object-cover" alt="Belvédère sur le Loing" />
                 <div className="absolute inset-0 bg-black/10"></div>
              </div>
           </div>
        </div>

        {/* Etape 2 : Intergénérationnel */}
        <div className="py-32 bg-stone-50">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid md:grid-cols-2 gap-24 items-center">
              <div className="aspect-square rounded-[4rem] overflow-hidden shadow-2xl relative">
                 <img src="/assets/images/vie_sociale_enfants.png" className="w-full h-full object-cover" alt="Vie sociale et enfants" />
                 <div className="absolute inset-0 bg-black/5"></div>
              </div>
              <div className="space-y-10">
                 <h3 className="text-4xl md:text-6xl font-serif text-stone-900 italic leading-none">2. Un espace pour toutes les générations</h3>
                 <p className="text-xl text-stone-500 font-light leading-relaxed text-justify">
                    En levant les yeux, vous voyez le bâtiment s'animer : ici, un atelier de sculpture ; là, une exposition de dessins. Juste à côté, dans un espace sécurisé et arboré, vous entendez les rires des enfants. Ils grimpent sur des billots de bois brut et inventent des histoires au milieu des essences locales.
                 </p>
                 <MarginNote title="Intergénérationnel">
                    Ludothèque de plein air et zones d'ateliers créatifs.
                 </MarginNote>
              </div>
            </div>
          </div>
        </div>

        {/* Etape 3 : Jardin partagé */}
        <div className="py-32 container mx-auto px-6 max-w-7xl">
           <div className="grid md:grid-cols-2 gap-24 items-center">
              <div className="space-y-10">
                 <h3 className="text-4xl md:text-6xl font-serif text-stone-900 italic leading-none">3. Le jardin partagé</h3>
                 <p className="text-xl text-stone-500 font-light leading-relaxed text-justify">
                    Avant de repartir, vous traversez le jardin du marché à l'angle de la rue Pautrat. C'est un petit coin de terre comestible où chacun peut mettre les mains dans le sol, observer la floraison de l'ail ou cultiver des pommes de terre avec les enfants. Un lieu d'apprentissage permanent de la terre.
                 </p>
              </div>
              <div className="aspect-video rounded-[4rem] overflow-hidden shadow-2xl relative">
                 <img src="/assets/images/jardin_marche.png" className="w-full h-full object-cover" alt="Jardin du marché" />
                 <div className="absolute inset-0 bg-black/5"></div>
              </div>
           </div>
        </div>
      </section>

      {/* --- 6. FICHE TECHNIQUE --- */}
      <section className="py-48 bg-stone-50 border-y border-stone-100">
        <div className="container mx-auto px-6 max-w-5xl">
           <div className="bg-white rounded-[4rem] p-16 md:p-24 shadow-xl border border-stone-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-12 opacity-5 text-emerald-900">
                 <Info size={120} />
              </div>
              <div className="relative z-10">
                 <span className="text-[11px] uppercase tracking-[0.6em] font-bold text-emerald-900 block mb-12">Fiche Technique & Enjeux Institutionnels</span>
                 <h2 className="text-4xl md:text-6xl font-serif italic mb-16 text-stone-900">Un projet exemplaire.</h2>
                 
                 <div className="grid md:grid-cols-2 gap-16 text-justify">
                    <div className="space-y-12">
                       <div className="space-y-4">
                          <h5 className="font-bold text-xs uppercase tracking-widest text-amber-600">Maîtrise Foncière & Récupération</h5>
                          <p className="text-stone-500 text-sm leading-relaxed">Réhabilitation de l'ancien site « Gamm Vert » (parcelle 00284) de 400 m², actuellement en cours d'acquisition via l'Établissement Public Foncier (EPF).</p>
                       </div>
                       <div className="space-y-4">
                          <h5 className="font-bold text-xs uppercase tracking-widest text-amber-600">Sobriété Foncière (Loi ZAN)</h5>
                          <p className="text-stone-500 text-sm leading-relaxed">En recyclant une friche inoccupée en plein centre-bourg, le projet répond aux exigences de lutte contre l'artificialisation des sols.</p>
                       </div>
                    </div>
                    <div className="space-y-12">
                       <div className="space-y-4">
                          <h5 className="font-bold text-xs uppercase tracking-widest text-amber-600">Résilience Écologique</h5>
                          <p className="text-stone-500 text-sm leading-relaxed">Désimperméabilisation des sols (environ 600 m²) pour créer des îlots de fraîcheur et assurer une gestion naturelle des eaux pluviales.</p>
                       </div>
                       <div className="space-y-4">
                          <h5 className="font-bold text-xs uppercase tracking-widest text-amber-600">Accessibilité & Dynamisme</h5>
                          <p className="text-stone-500 text-sm leading-relaxed">Cheminement PMR sans dénivelé. Labellisée « Petite Cité de Caractère », Saint-Sauveur renforce son attractivité « Petites Villes de Demain ».</p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* --- 7. FINAL CALL --- */}
      <section className="py-72 bg-stone-900 text-white text-center relative overflow-hidden">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-800 rounded-full blur-[200px] opacity-20 pointer-events-none" />
         
         <div className="container mx-auto px-6 max-w-5xl relative z-10 space-y-24">
            <h2 className="text-7xl md:text-[12rem] font-serif italic leading-[0.7] tracking-tighter">Bâtissons <br/> <span className="not-italic text-white">ce futur</span> <br/> ensemble.</h2>
            
            <div className="flex flex-col items-center gap-12">
               <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-10 py-10 px-20 bg-amber-600 text-white rounded-full shadow-2xl hover:bg-amber-500 transition-all duration-700 group border border-amber-400/20 active:scale-95">
                  <span className="text-xl uppercase tracking-[0.4em] font-bold">Échanger avec Marion</span>
                  <Mail className="group-hover:translate-x-2 transition-transform" />
               </a>
               
               <div className="flex gap-12 pt-12 border-t border-white/5 w-full justify-center opacity-40 hover:opacity-100 transition-opacity">
                  <a href={`https://${MARION_SITE}`} target="_blank" className="text-xs uppercase tracking-widest font-black flex items-center gap-3 hover:text-amber-500 transition-colors">
                     <Globe size={14} /> {MARION_SITE}
                  </a>
                  <a href={`https://${PROJECT_SITE}`} target="_blank" className="text-xs uppercase tracking-widest font-black flex items-center gap-3 hover:text-emerald-400 transition-colors">
                     <Building2 size={14} /> {PROJECT_SITE}
                  </a>
               </div>
            </div>
         </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-24 bg-[#0a0a0a] text-stone-600 border-t border-white/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 text-[10px] uppercase tracking-[0.8em] font-medium">
            <div className="flex flex-col gap-2">
              <p>© 2024 • Conception Marion Godiard • Architecte du paysage & Boulangère</p>
              <p className="text-stone-800 flex items-center gap-2"><MapPin size={12} /> Saint-Sauveur-en-Puisaye • Puisaye-Forterre</p>
            </div>
            <div className="flex items-center gap-6">
               <span className="flex items-center gap-2 text-stone-400"><Leaf size={14} className="text-emerald-900" /> Petite Cité de Caractère</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;