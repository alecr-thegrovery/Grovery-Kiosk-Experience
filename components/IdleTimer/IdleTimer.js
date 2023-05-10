/*===== Components =====*/
import React, { useState, useEffect } from 'react';
import { router } from 'next/router'
import { useIdleTimer } from 'react-idle-timer'

/*===== Styles =====*/
import componentStyles from './styles.module.scss'

const timeout = 20_000
const promptBeforeIdle = 10_000

export default function IdleTimer({ 
  //Props
  id, image, title, 
  previewText, author, date
}) {

  const [state, setState] = useState('Active')
  const [remaining, setRemaining] = useState(timeout)
  const [open, setOpen] = useState(false)

  const onIdle = () => {
      //alert("onIdle");
      setState('Idle')
      setOpen(false)
      redirect()
    }

    const onActive = () => {
      //alert("onActive");
      setState('Active')
      setOpen(false)
    }

    const onPrompt = () => {
      //alert("onPrompt");
      setState('Prompted')
      setOpen(true)
    }

    const redirect = () => {
      router.push("/");
    }

    const { getRemainingTime, activate } = useIdleTimer({
      onIdle,
      onActive,
      onPrompt,
      timeout,
      promptBeforeIdle,
      throttle: 500
    })

    useEffect(() => {
      const interval = setInterval(() => {
        setRemaining(Math.ceil(getRemainingTime() / 1000))
      }, 500)

      return () => {
        clearInterval(interval)
      }
    })

    const handleStillHere = () => {
      activate()
    }

    const timeTillPrompt = Math.max(remaining - promptBeforeIdle / 1000, 0)
    const seconds = timeTillPrompt > 1 ? 'seconds' : 'second'


  return (
    <div className={componentStyles.IdleTimer}>
      <h1>React Idle Timer</h1>
      <h2>Confirm Prompt</h2>
      <br />
      <p>Current State: {state}</p>
      {timeTillPrompt > 0 && (
        <p>
          {timeTillPrompt} {seconds} until prompt
        </p>
      )}

      <div
        className='modal'
        style={{
          display: open ? 'flex' : 'none'
        }}>
        <h3>Are you still here?</h3>
        <p>Logging out in {remaining} seconds</p>
        <button onClick={handleStillHere}>Im still here</button>
      </div>
    </div>
  )
}
