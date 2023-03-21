import React, { useState, useEffect, useRef, useCallback } from "react";
import Box from "@mui/material/Box";
import FilledInput from "@mui/material/FilledInput";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { CardHeader } from "@mui/material";

import useAxios from "../hooks/useAxios";
import { useBookContext } from "../contexts/BookContext";
import Message from "./Message";
import Loading from "./Loading";
import { BaseUrl } from "../config/urls";

export default function AddBook() {
  const [name, setName] = useState("");
  const [autorEmail, setAutorEmail] = useState("");
  const [pages, setPages] = useState(0);
  const [message, setMessage] = useState({});
  const [disabled, setDisabled] = useState(true);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const {
    error,
    loading,
    response,
    setLoading,
    fetchData,
    setRequestConfig,
    setMethod,
    setUrl,
  } = useAxios();
  const { id, setId, state, setState } = useBookContext();

  useEffect(() => {
    setLoading(false);
    if (id === 0) setState("Add");
  }, [id, setLoading, setState]);

  useEffect(() => {
    if (state === "Add") {
      setMethod("POST");
      setUrl(BaseUrl);
    }
  }, [state, setMethod, setUrl]);

  const isEmail = (email) =>
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

  const validateEmail = (e) => {
    if (e.target.value.trim() && !isEmail(e.target.value.trim())) {
      setMessage({
        message: "Invalid email",
        severity: "error",
        duration: 2000,
        reset: new Date(),
      });
      emailRef?.current?.querySelector("input")?.focus();
    }
  };

  const cleanUpForm = useCallback(() => {
    setName("");
    setAutorEmail("");
    setPages(0);
    setId(0);
    nameRef?.current?.querySelector("input")?.focus();
  }, [setId]);

  const updateRequestConfig = useCallback(() => {
    setRequestConfig({
      data: {
        title: name,
        autorEmail,
        pages,
      },
    });
  }, [name, autorEmail, pages, setRequestConfig]);

  const handleSubmit = () => {
    try {
      fetchData();
    } catch (error) {
      setMessage(error.message);
    } finally {
      cleanUpForm();
      setId(0);
    }
  };

  useEffect(() => {
    try {
      if (error) {
        setMessage({
          message: error,
          severity: "error",
          duration: 2000,
          reset: new Date(),
        });
      }
      if (response.id) {
        setMessage({
          message: `Book ${state === "Add" ? "added" : "updated"} correctly!!!`,
          severity: `${state === "Add" ? "success" : "info"}`,
          duration: 2000,
          reset: new Date(),
        });
        cleanUpForm();
      }
    } catch (error) {
      setMessage(error.message);
    }
  }, [response, error, state, cleanUpForm]);

  useEffect(() => {
    updateRequestConfig();
    if (
      autorEmail &&
      isEmail(autorEmail?.trim()) &&
      name?.trim().length &&
      pages
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [name, autorEmail, pages, updateRequestConfig]);

  return (
    <>
      {message && (
        <Message
          {...message}
          style={{ minWidth: "360px", maxWidth: "600px", margin: "auto" }}
        />
      )}
      <Card
        sx={{ minWidth: 360 }}
        style={{ maxWidth: "600px", margin: "auto" }}
      >
        <CardHeader title={`${state} Book`} style={{ textAlign: "center" }} />
        <CardContent>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1 },
              width: "100%",
              display: "flex",
              flexDirection: "column",
            }}
            noValidate
            autoComplete="off"
          >
            <FormControl variant="filled">
              <InputLabel htmlFor="title">Title</InputLabel>
              <FilledInput
                id="title"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoFocus={true}
                ref={nameRef}
              />
            </FormControl>
            <FormControl variant="filled">
              <InputLabel htmlFor="autorEmail">Author Email</InputLabel>
              <FilledInput
                id="autorEmail"
                type="email"
                color="primary"
                value={autorEmail}
                onChange={(e) => setAutorEmail(e.target.value)}
                onBlur={(e) => validateEmail(e)}
                ref={emailRef}
              />
            </FormControl>
            <FormControl variant="filled">
              <InputLabel htmlFor="pages">Pages</InputLabel>
              <FilledInput
                id="pages"
                type="number"
                value={pages ? pages : ""}
                onChange={(e) => setPages(e.target.value)}
              />
            </FormControl>
          </Box>
        </CardContent>
        <CardActions style={{ justifyContent: "space-around" }}>
          <Button
            size="small"
            onClick={() => handleSubmit()}
            disabled={disabled}
          >
            {state}
          </Button>
          <Button
            size="small"
            onClick={() => {
              cleanUpForm();
            }}
          >
            Clean Form
          </Button>
        </CardActions>
      </Card>
      {loading && <Loading />}
    </>
  );
}
