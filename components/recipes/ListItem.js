import { useRouter } from 'next/router'


export default function ListItem({ recipe }) {
  const router = useRouter()
  
  const recipeDetailsHandler = () => {
    router.push('/recipes/' + recipe._id)
  }

  return (
    <div>
      <img src={'https://recipe-nextapp-dev.s3.us-west-1.amazonaws.com/recipes/61c0d8093aec9c16b5e77aac/ramen_noodle_soup.jfif?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMSJHMEUCIH%2Bxqbl8T0jEb%2B2ExAvb%2FWUUTdAHcbEKeOaX9X77crL8AiEAvL0VvuZoh6GCxh7MNTuMgL980cQHvXR56VMplyKs%2BFEq%2FwII9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2OTY5NDc1ODQ1MDMiDO0t0q3ajjjeGNZm1irTAplJfHPpdMY7SKVeGuABgazzLZUG%2BKaMKc00NdgwRdTAdW7hehPTKHN4WxGOonhB4jXwRAw3C1bhXnnJrzrfOZOiDw4LqxIPLb67OcaAs3J1SPbh5nJIuMihK603dDsUP9EKmeYLu4wFIOkjE739zNpp0lOW9WaGH0HeDzbtziTVS%2FalQ68egFCii6SKg%2FtupSahIuCi39%2FGEcgQ624QdWOyc0nuQmYNsW2A2Te1fiVDJ%2Bmq%2F%2BMSZDjtk%2F%2F7bfM4SCnf6NQmhG1ejCDt%2FzBxGPmOuBOpwYVt8xZpJ4vd1pAb3HSjXOq%2FySAIacYaOJ2EDuhMfLERuWp%2BD5XvDmqxvpjoh0o5m1L51J1nh8OkivxrbeYNo5fg0X8Tw2rYqqJI6vIF0IgE7QlkrZd2R%2FNaJNZ%2FrHTzQtrfIIN7f712KN%2Bw%2FFcBIMn6HXAgJ1AcMOLJplSo6TDil4OOBjqzAmoAA1U4PgYdLDyqFMTfURcgq%2FFVa2dZThRyBA2jsKNM1QH%2Fywyu8RPrZ6STluzrEwX6FGz3GbuhK%2Bm4Ex94%2FsJOQYPJ2V2vRZcGzBoNPlMBnxo5MMexSBXy2LPcoLSzwfTMEZEuj2mElbU9U1gtc6WVSyoT3sBAuGtdrKVse9JN9kTnUON0ajYlC0X4V7SeEVjoVWFWVf7vCFtZKG%2BYfaCs9EzBYqrBecKmAcpN1P1bgXPIrATb8aC%2FdN1kWTXvIduusY8wTr7m3pfJe62vDljXJamlzEQC%2BFKP%2B8iyyS%2B0n%2FkiuuPiYo%2Br%2BW2zGBPnp%2FpJ65IcjHSe59FFdMovIdNeBu7HStFCsSzKi%2FISroIgqMvcpnwssy2yk8Xgq%2FcAtDUknj%2B8b83ySykHK59UqlsQ%2FRE%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20211221T022954Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA2ERKQFX3QC6LA5PP%2F20211221%2Fus-west-1%2Fs3%2Faws4_request&X-Amz-Signature=1dfa97216ef049cd31402b16e694a36e7ce9bb49154b456e1d215889dae33a50'} alt="" className="flex-none w-18 h-18 rounded-lg object-cover bg-gray-100" width="144" height="144" />
      <div>{recipe.title}</div>
      <div>{recipe.servings} servings</div>
      <div>{recipe.rating}/5</div>
      <div>{recipe.author}</div>
      <button onClick={recipeDetailsHandler}>Show Details</button> 
    </div>
    )
}
