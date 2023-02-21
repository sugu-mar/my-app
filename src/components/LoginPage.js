import React from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as yup from 'yup'

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <Link color="inherit" href="">
        Callisto CRM
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const theme = createTheme()

const formValidationSchema = yup.object({
  email: yup.string().required('Please enter your email address'),
  password: yup.string().required('Please enter your password'),
})

export default function Login() {
  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: formValidationSchema,
    onSubmit: (values) => {
      console.log('onSubmit', values)
    },
  })
  const navigate = useNavigate()
  const handleSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    })
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box
            component="form"
            onSubmit={formik.handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              // margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              // onChange={formik.handlechange}
              // value={formik.value.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              autoComplete="email"
              autoFocus
            />
            <p>
              {' '}
              {formik.touched.email && formik.errors.email
                ? formik.errors.email
                : ''}
            </p>
            <TextField
              // margin="normal"
              required
              fullWidth
              name="password"
              // onChange={formik.handlechange}
              // value={formik.value.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <p>
              {formik.touched.password && formik.errors.password
                ? formik.errors.password
                : ''}
            </p>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 2, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                {/* <Link href="#" variant="body2">
                  Forgot password?
                </Link> */}
                <Button onClick={() => navigate('/signup')}>
                  Forgot password?
                </Button>
              </Grid>
              <Grid item>
                {/* <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link> */}
                <Button onClick={() => navigate('/signup')}>
                  Don't have an account? Sign Up
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  )
}
