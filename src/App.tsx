import * as Comp from './components/index';
import * as util from './utils/str';
function App() {
  console.log(util);
  return (
    <div>
      {
        getComp('first-letter')
      }
    </div>
  );
}

function getComp(key: string) {
    switch(key){
      case 'hook-demo1':
        return (
          <div>
            <Comp.HookDemo1></Comp.HookDemo1>
          </div>
        );
      case 'hook-effect':
        return (
          <div>
            <Comp.CompEffect ></Comp.CompEffect>
          </div>
        );
      case 'show-color':
        return (
          <div>
            <Comp.ShowColor></Comp.ShowColor>
          </div>
        );
      case 'book':
        return (
          <div>
            <Comp.Book></Comp.Book>
          </div>
        );
      case 'context':
        return (
          <div>
            <Comp.ContextComp></Comp.ContextComp>
          </div>
        );
      case 'first-letter':
        return (
          <>
            <Comp.FirstLetter text='风尘三尺剑，社稷一戎衣。'></Comp.FirstLetter>
          </>
        )
    }
}
export default App;
