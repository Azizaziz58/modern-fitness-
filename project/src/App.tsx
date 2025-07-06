import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WorkoutPrograms from './components/WorkoutPrograms';
import NutritionPlans from './components/NutritionPlans';
import Trainers from './components/Trainers';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WorkoutDetail from './pages/WorkoutDetail';
import FitnessAssessment from './pages/FitnessAssessment';
import NutritionPlanDetail from './pages/NutritionPlanDetail';
import NutritionConsultation from './pages/NutritionConsultation';
import BookSession from './pages/BookSession';
import TrainerProfile from './pages/TrainerProfile';
import TrainerApplication from './pages/TrainerApplication';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [currentPage, setCurrentPage] = useState('home');
  const [pageData, setPageData] = useState<any>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (currentPage !== 'home') return;
      
      const sections = ['home', 'workouts', 'nutrition', 'trainers', 'pricing', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    // Observe all elements with scroll-animate class
    const animateElements = document.querySelectorAll('.scroll-animate');
    animateElements.forEach(el => observer.observe(el));

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, [currentPage]);

  const navigateToPage = (page: string, data?: any) => {
    setCurrentPage(page);
    setPageData(data);
    window.scrollTo(0, 0);
  };

  const navigateToHome = () => {
    setCurrentPage('home');
    setPageData(null);
    window.scrollTo(0, 0);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'workout-detail':
        return <WorkoutDetail program={pageData} onBack={navigateToHome} />;
      case 'fitness-assessment':
        return <FitnessAssessment onBack={navigateToHome} />;
      case 'nutrition-plan-detail':
        return <NutritionPlanDetail plan={pageData} onBack={navigateToHome} />;
      case 'nutrition-consultation':
        return <NutritionConsultation onBack={navigateToHome} />;
      case 'book-session':
        return <BookSession trainer={pageData} onBack={navigateToHome} />;
      case 'trainer-profile':
        return <TrainerProfile trainer={pageData} onBack={navigateToHome} />;
      case 'trainer-application':
        return <TrainerApplication onBack={navigateToHome} />;
      default:
        return (
          <>
            <Header activeSection={activeSection} />
            <main>
              <section id="home">
                <Hero />
              </section>
              <section id="workouts">
                <WorkoutPrograms onNavigate={navigateToPage} />
              </section>
              <section id="nutrition">
                <NutritionPlans onNavigate={navigateToPage} />
              </section>
              <section id="trainers">
                <Trainers onNavigate={navigateToPage} />
              </section>
              <section id="pricing">
                <Pricing />
              </section>
              <section id="contact">
                <Contact />
              </section>
            </main>
            <Footer />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      {renderCurrentPage()}
    </div>
  );
}

export default App;