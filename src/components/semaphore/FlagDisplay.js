import React, { useEffect } from 'react';
import { ReactComponent as A } from './abc/a.svg';
import { ReactComponent as B } from './abc/b.svg';
import { ReactComponent as C } from './abc/c.svg';
import { ReactComponent as D } from './abc/d.svg';
import { ReactComponent as E } from './abc/e.svg';
import { ReactComponent as F } from './abc/f.svg';
import { ReactComponent as G } from './abc/g.svg';
import { ReactComponent as H } from './abc/h.svg';
import { ReactComponent as I } from './abc/i.svg';
import { ReactComponent as J } from './abc/j.svg';
import { ReactComponent as K } from './abc/k.svg';
import { ReactComponent as L } from './abc/l.svg';
import { ReactComponent as M } from './abc/m.svg';
import { ReactComponent as N } from './abc/n.svg';
import { ReactComponent as O } from './abc/o.svg';
import { ReactComponent as P } from './abc/p.svg';
import { ReactComponent as Q } from './abc/q.svg';
import { ReactComponent as R } from './abc/r.svg';
import { ReactComponent as S } from './abc/s.svg';
import { ReactComponent as T } from './abc/t.svg';
import { ReactComponent as U } from './abc/u.svg';
import { ReactComponent as V } from './abc/v.svg';
import { ReactComponent as W } from './abc/w.svg';
import { ReactComponent as X } from './abc/x.svg';
import { ReactComponent as Y } from './abc/y.svg';
import { ReactComponent as Z } from './abc/z.svg';
import { ReactComponent as Space } from './abc/space.svg';
import { ReactComponent as Blank } from './abc/blank.svg';


function FlagDisplay(props){

    const mess = "hello";
    let character;

    switch (props.character){
        case 'a':
        character = <A style={{'maxWidth':'85vw', 'maxHeight':'85vh'}} />
        break;
        case 'b':
        character = <B style={{'maxWidth':'85vw', 'maxHeight':'85vh'}} />
        break;
        case 'c':
        character = <C style={{'maxWidth':'85vw', 'maxHeight':'85vh'}} />
        break;
        case 'd':
        character = <D style={{'maxWidth':'85vw', 'maxHeight':'85vh'}} />
        break;
        case 'e':
        character = <E style={{'maxWidth':'85vw', 'maxHeight':'85vh'}} />
        break;
        case 'f':
        character = <F style={{'maxWidth':'85vw', 'maxHeight':'85vh'}} />
        break;
        case 'g':
        character = <G style={{'maxWidth':'85vw', 'maxHeight':'85vh'}} />
        break;
        case 'h':
        character = <H style={{'maxWidth':'85vw', 'maxHeight':'85vh'}} />
        break;
        case 'i':
        character = <I style={{'maxWidth':'85vw', 'maxHeight':'85vh'}} />
        break;
        case 'j':
        character = <J style={{'maxWidth':'85vw', 'maxHeight':'85vh'}} />
        break;
        case 'k':
        character = <K style={{'maxWidth':'85vw', 'maxHeight':'85vh'}} />
        break;
        case 'l':
        character = <L style={{'maxWidth':'85vw', 'maxHeight':'85vh'}} />
        break;
        case 'm':
        character = <M style={{'maxWidth':'85vw', 'maxHeight':'85vh'}} />
        break;
        case 'n':
        character = <N style={{'maxWidth':'85vw', 'maxHeight':'85vh'}} />
        break;
        case 'o':
        character = <O style={{'maxWidth':'85vw', 'maxHeight':'85vh'}} />
        break;
        case 'p':
        character = <P style={{'maxWidth':'85vw', 'maxHeight':'85vh'}} />
        break;
        case 'q':
        character = <Q style={{'maxWidth':'85vw', 'maxHeight':'85vh'}} />
        break;
        case 'r':
        character = <R style={{'maxWidth':'85vw', 'maxHeight':'85vh'}} />
        break;
        case 's':
        character = <S style={{'maxWidth':'85vw', 'maxHeight':'85vh'}} />
        break;
        case 't':
        character = <T style={{'maxWidth':'85vw', 'maxHeight':'85vh'}} />
        break;
        case 'u':
        character = <U style={{'maxWidth':'85vw', 'maxHeight':'85vh'}} />
        break;
        case 'v':
        character = <V style={{'maxWidth':'85vw', 'maxHeight':'85vh'}} />
        break;
        case 'w':
        character = <W style={{'maxWidth':'85vw', 'maxHeight':'85vh'}} />
        break;
        case 'x':
        character = <X style={{'maxWidth':'85vw', 'maxHeight':'85vh'}} />
        break;
        case 'y':
        character = <Y style={{'maxWidth':'85vw', 'maxHeight':'85vh'}} />
        break;
        case 'z':
        character = <Z style={{'maxWidth':'85vw', 'maxHeight':'85vh'}} />
        break;
        case ' ':
        character = <Space style={{'maxWidth': '85vw', 'maxHeight':'85vh'}} />
        break;
        case '*':
        character = <Blank style={{'maxWidth': '85vw', 'maxHeight':'85vh'}} />
        break;
        default :
        character = <Space style={{'maxWidth': '85vw', 'maxHeight':'85vh'}} />
        break;
    }


    let spanChar;   //This is to force animation re-render
        if (parseInt(props.index)%2 == 0){
            spanChar = <span className="animate__animated animate__fadeIn">{character}</span>
        }
        else{
            spanChar = <span className="w3-animate-opacity">{character}</span>
        }

    return(
        <div className="w3-center">
            {spanChar}
        </div>
    );
}

export default FlagDisplay;