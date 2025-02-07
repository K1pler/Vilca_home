import HeroSection from '@/components/HeroSection'
import DepartmentsSection from '@/components/DepartmentsSection'
import { useQuery } from '@tanstack/react-query'

export default function HomePage() {

  // 1. Función para hacer fetch de departamentos
  const fetchDepartments = async () => {
    const response = await fetch('https://vilca-home.onrender.com/habitaciones')
    if (!response.ok) {
      throw new Error('Error en la respuesta del servidor')
    }
    return response.json()
  }

  // 2. useQuery: automáticamente maneja loading, error y data
  const {
    data: departments,
    isLoading,
    isError,
    error,
  } = useQuery(['departments'], fetchDepartments)

  return (
    <div>
      <HeroSection />
      <DepartmentsSection
        // 3. Pasamos los datos al componente
        departments={departments || []}
        loading={isLoading}
        error={isError ? error.message : null}
      />
    </div>
  )
}
