import {
  Box,
  Button,
  Card,
  TextField,
  Grid,
  MenuItem,
  formGroupClasses,
  CardActionArea,
} from '@mui/material';
import React, { useState } from 'react';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
// import { Col, Row } from 'react-bootstrap';

export type petPhotos = {
  firstPhoto: string;
  secondPhoto: string;
};

export default function VariationsPage(): JSX.Element {
  return (
    <Row>
      <Col>
        <Card sx={{ maxWidth: 500, maxHeight: 500, ml: 40 }}>
          <CardActionArea>
            <CardMedia component="img" height="300" width="300" alt="your pet" />
            <CardContent>
              <Typography
                sx={{ display: 'flex', justifyContent: 'center' }}
                variant="body2"
                color="text.secondary"
              >
                Ваш питомец
              </Typography>
              <Button
                sx={{ display: 'flex', justifyContent: 'center' }}
                component="label"
                htmlFor="upload-input"
                size="small"
              >
                Добавить фото
              </Button>
            </CardContent>
          </CardActionArea>
        </Card>
      </Col>
      <Col>
        <Card sx={{ maxWidth: 500, maxHeight: 500, ml: 40, my: 3 }}>
          <CardActionArea>
            <CardMedia component="img" height="300" width="300" alt="liked pet" />
            <CardContent>
              <Typography
                sx={{ display: 'flex', justifyContent: 'center' }}
                variant="body2"
                color="text.secondary"
              >
                Другой питомец
              </Typography>
              <Button
                sx={{ display: 'flex', justifyContent: 'center' }}
                component="label"
                htmlFor="upload-input"
                size="small"
              >
                Добавить фото
              </Button>
            </CardContent>
          </CardActionArea>
        </Card>
      </Col>
    </Row>
  );
}
